// Wait for DOM to finish loading before running script
document.addEventListener('DOMContentLoaded', () => {
    // Use fetch to get the JSON data
    fetch('https://raw.githubusercontent.com/sjccolombo/sjc-storage/main/JSON/main/news.json')
        .then(response => response.json())
        .then(data => {
            // Get the container element
            let container = document.getElementById('news-container');
            let htmlData = '';
            // Loop through the data array
            for (let i = 0; i < data.length; i++) {
                htmlData += '<div class="news-card">';
                htmlData += '<h2>' + data[i].title + '</h2>';
                htmlData += '<span class="news-info-container">';
                htmlData += '<div class="news-info">';
                htmlData += '<h5><i class="fa-solid fa-clock"></i>' + data[i].time + '</h5>';
                htmlData += '<h5><i class="fa-solid fa-calendar-days"></i>' + data[i].date + '</h5>';
                htmlData += '</div>';
                htmlData += '</span>';
                htmlData += '<span class="hr-container">';
                htmlData += '<hr>';
                htmlData += '</span>';
                htmlData += '<img src="' + data[i].image + '" alt="' + data[i].imageAlt + '">';
                htmlData += '<p>' + data[i].paragraph + '</p>';
                htmlData += '</div>';
            }
            // Insert the HTML into the container
            container.innerHTML = htmlData;
        })
        .catch(error => {
            console.error(error);
        });
});