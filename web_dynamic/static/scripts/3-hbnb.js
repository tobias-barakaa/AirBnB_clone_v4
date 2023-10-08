document.addEventListener('DOMContentLoaded', function () {
    // Make an HTTP POST request to the /api/v1/places_search endpoint
    fetch('http://0.0.0.0:5001/api/v1/places_search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
    .then(response => response.json())
    .then(data => {
        // Get the section.places element
        const placesSection = document.querySelector('section.places');

        // Loop through the results and create <article> tags
        data.forEach(place => {
            const article = document.createElement('article');
            article.innerHTML = `
                <!-- Customize the content here based on your place data -->
                <h2>${place.name}</h2>
                <!-- Add more place information as needed -->
            `;
            placesSection.appendChild(article);
        });
    })
    .catch(error => {
        console.error('Error fetching places:', error);
    });
});

