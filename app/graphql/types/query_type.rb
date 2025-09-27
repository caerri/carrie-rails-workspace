# frozen_string_literal: true

require 'net/http'  # pulls in the net/http library for making HTTP requests
require 'json'      # pulls in the JSON library for parsing JSON responses

module Types
  class QueryType < Types::BaseObject # Defines the query type for the GraphQL API
    field :github_repo, GithubRepoType, null: true do # field to fetch repo and type info
      argument :owner, String, required: true # GitHub repo owner
      argument :name, String, required: true # GitHub repo name
    end

    field :github_repos, [GithubRepoType], null: true do
      argument :owner, String, required: true
      argument :limit, Integer, required: false
    end

    # Allows fetching multiple nodes by their global IDs
    field :node, Types::NodeType, null: true, description: "Fetches node by ID." do
      argument :id, ID, required: true, description: "ID of the object." 
    end

    def github_repo(owner:, name:)
      # query specific fields
      query = <<-GRAPHQL
        query {
          repository(owner: "#{owner}", name: "#{name}") {
            name
            language
            created_at
            updated_at
          }
        }
      GRAPHQL

      uri = URI("https://api.github.com/graphql") # GitHub GraphQL endpoint
      http = Net::HTTP.new(uri.host, uri.port)  # initializes the HTTP object
      http.use_ssl = true # enables SSL/TLS
      request = Net::HTTP::Post.new(uri.path, {
        "Authorization" => "Bearer #{ENV['GITHUB_TOKEN']}",
        "Content-Type" => "application/json"
      })
      request.body = { query: query }.to_json
      response = http.request(request)
      result = JSON.parse(response.body)
      result.dig("data", "repository")
    end

    def github_repos(owner:, limit: nil)
      uri = URI("https://api.github.com/users/#{owner}/repos")
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true
      request = Net::HTTP::Get.new(uri, {
        "Authorization" => "Bearer #{ENV['GITHUB_TOKEN']}",
        "Content-Type" => "application/json"
      })
      response = http.request(request)
      repos = JSON.parse(response.body)
      repos = repos.first(limit) if limit
      repos.map do |repo|
        {
          name: repo["name"],
          language: repo["language"],
          created_at: repo["created_at"],
          updated_at: repo["updated_at"]
        }
      end
    end
  end
end
