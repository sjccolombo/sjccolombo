// Wait for DOM to finish loading before running script
document.addEventListener('DOMContentLoaded', () => {
    // Use fetch to get the JSON data
    fetch('https://raw.githubusercontent.com/sjccolombo/sjc-storage/main/JSON/main/info.json')
        .then(response => response.json())
        .then(data => {
            // Get the container element
            let container = document.getElementById('details-container');
            let htmlData = '';
            // Loop through the data array
            for (let i = 0; i < data.length; i++) {
                htmlData += '<h1>Follow Us</h1>';
                htmlData += '<div class="sm-container">';
                htmlData += '<a class="sm-icon" href="' + data[i].youtubeLink + '" target="_blank" title="YouTube">';
                htmlData += '<i class="fa-brands fa-youtube"></i>';
                htmlData += '</a>';
                htmlData += '<a class="sm-icon" href="' + data[i].facebookLink + '" target="_blank" title="Facebook">';
                htmlData += '<i class="fa-brands fa-facebook-f"></i>';
                htmlData += '</a>';
                htmlData += '<a class="sm-icon" href="' + data[i].instagramLink + '" target="_blank" title="Instagram">';
                htmlData += '<i class="fa-brands fa-instagram"></i>';
                htmlData += '</a>';
                htmlData += '<a class="sm-icon" href="mailto:' + data[i].email + '" title="Email">';
                htmlData += '<i class="fa-solid fa-envelope"></i>';
                htmlData += '</a>';
                htmlData += '<a class="sm-icon" href="tel:' + data[i].contactNo + '" title="Telephone">';
                htmlData += '<i class="fa-solid fa-phone"></i>';
                htmlData += '</a>';
                htmlData += '</div>';
            }
            // Insert the HTML into the container
            container.innerHTML = htmlData;
        })
        .catch(error => {
            console.error(error);
        });
});