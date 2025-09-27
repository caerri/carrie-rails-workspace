# frozen_string_literal: true

module Types
  class GithubRepoType < Types::BaseObject
    field :name, String, null: true
    field :language, String, null: true
    field :created_at, String, null: true
    field :updated_at, String, null: true
  end
end
