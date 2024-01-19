function changeBackground(color) {
    var body = document.body;
    body.style.backgroundColor = color;
    body.style.color = color === "white" ? "black" : "white";
  }
  
  document.querySelector("#button1").addEventListener("click", function() {
    changeBackground("gray");
  });
  
  document.querySelector("#button2").addEventListener("click", function() {
    changeBackground("white");
  });
  

document.addEventListener('DOMContentLoaded', function () {
    // Fetch photos data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photos => {
            // Get the grid container
            const gridContainer = document.querySelector('.grid-container');

            // Use a for loop to iterate over the first 10 photos
            for (let i = 0; i < 9; i++) {
                // Get the current photo
                const photo = photos[i];

                // Create photo container
                const photoContainer = document.createElement('div');
                photoContainer.classList.add('photo')

                // Create photo title
                const photoTitle = document.createElement('h2');
                photoTitle.textContent = photo.title;

                // Create photo image
                const photoImage = document.createElement('img');
                photoImage.src = photo.url;
                photoImage.alt = photo.title;

                // Append elements to the photo container
                photoContainer.appendChild(photoTitle);
                photoContainer.appendChild(photoImage);

                // Append the photo container to the grid container
                gridContainer.appendChild(photoContainer);
            }

            // Get the button element
            const button = document.querySelector('#button3');
         
            // Add a click event listener to the button
            button.addEventListener('click', function () {
                // Use a for loop to iterate over the next 10 photos
                for (let i = 10; i < 20; i++) {
                    // Get the current photo
                    const photo = photos[i];

                    // Create photo container
                    const photoContainer = document.createElement('div');
                    photoContainer.classList.add('photo')

                    // Create photo title
                    const photoTitle = document.createElement('h2');
                    photoTitle.textContent = photo.title;

                    // Create photo image
                    const photoImage = document.createElement('img');
                    photoImage.src = photo.url;
                    photoImage.alt = photo.title;

                    // Append elements to the photo container
                    photoContainer.appendChild(photoTitle);
                    photoContainer.appendChild(photoImage);

                    // Append the photo container to the grid container
                    gridContainer.appendChild(photoContainer);
                }
            });
        })
        .catch(error => console.error('Error fetching photos:',error));
});
