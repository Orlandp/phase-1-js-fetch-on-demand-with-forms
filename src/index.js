const init = () => {
    const inputForm = document.querySelector("form");

    // Event listener for form submission
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form from refreshing the page
      
      const input = document.querySelector("input#searchByID"); // Get input value (movie ID)
      
      // Fetch data from the JSON server using the movie ID from user input
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
          // Select the DOM elements to update with the fetched data
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          // Update the text content with the fetched movie details
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          // Handle any errors (like if the movie ID doesn't exist)
          console.error("Error fetching data:", error);
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
          title.innerText = "Movie not found";
          summary.innerText = "";
        });
    });
}

document.addEventListener('DOMContentLoaded', init);