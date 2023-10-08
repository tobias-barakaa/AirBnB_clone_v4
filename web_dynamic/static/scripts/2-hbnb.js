document.addEventListener('DOMContentLoaded', function () {
    // Make an HTTP GET request to check the API status
    fetch('http://0.0.0.0:5001/api/v1/status/')
        .then(response => response.json())
        .then(data => {
            // Check if the status is "OK"
            if (data.status === 'OK') {
                // Add the 'available' class to the api_status div
                document.querySelector('#api_status').classList.add('available');
            } else {
                // Remove the 'available' class from the api_status div
                document.querySelector('#api_status').classList.remove('available');
            }
        })
        .catch(error => {
            console.error('Error checking API status:', error);
        });
});

