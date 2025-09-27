function displayGraphQLResponse(response) {
    const responseContainer = document.getElementById('graphql-result');
    responseContainer.innerText = JSON.stringify(response, null, 2); 
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('graphql-form');
    const input = document.getElementById('graphql-query');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const owner = input.value;
        const query = `
          {
            githubRepos(owner: "${owner}", limit: 5) {
              name
              language
              createdAt
              updatedAt
            }
          }
        `;

        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({ query })
        })
        .then(response => response.json())
        .then(data => displayGraphQLResponse(data))
        .catch(error => console.error('Error:', error));
    });
});