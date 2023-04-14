// Wait for DOM to finish loading before running script
document.addEventListener('DOMContentLoaded', () => {
    // Use fetch to get the JSON data
    fetch('https://raw.githubusercontent.com/sjccolombo/sjc-storage/main/JSON/main/societies.json')
        .then(response => response.json())
        .then(data => {
            // Get the container element
            let container = document.getElementById('activities-content');
            let htmlData = '';
            // Loop through the data array
            for (let i = 0; i < data.length; i++) {
                htmlData += '<div class="activities-contentCard">';
                htmlData += '<h2>' + data[i].name + '</h2>';
                htmlData += '</div>';
            }
            // Insert the HTML into the container
            container.innerHTML = htmlData;
        })
        .catch(error => {
            console.error(error);
        });
});