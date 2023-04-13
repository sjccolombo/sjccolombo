// Wait for DOM to finish loading before running script
document.addEventListener('DOMContentLoaded', () => {
    // Use fetch to get the JSON data
    fetch('https://raw.githubusercontent.com/sjccolombo/sjc-storage/main/JSON/main/rectors.json')
        .then(response => response.json())
        .then(data => {
            // Get the container element
            let container = document.getElementById('abContent-rectorsContainer');
            let htmlData = '';
            // Loop through the data array
            for (let i = 0; i < data.length; i++) {
                htmlData += '<div class="abContent-rectorsCard">';
                htmlData += '<h2>' + data[i].name + '</h2>';
                htmlData += '<p>(' + data[i].time + ')</p>';
                htmlData += '<img src="' + data[i].image + '" alt="' + data[i].imageAlt + '">';
                htmlData += '</div>';
            }
            // Insert the HTML into the container
            container.innerHTML = htmlData;
        })
        .catch(error => {
            console.error(error);
        });
});