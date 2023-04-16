// Create movie data
const movies = [
    {
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      rating: 9.3,
      year: 1994
    },
    {
      title: 'The Godfather',
      genre: 'Crime',
      rating: 9.2,
      year: 1972
    },
    {
      title: 'The Dark Knight',
      genre: 'Action',
      rating: 9.0,
      year: 2008
    },
    {
      title: 'Pulp Fiction',
      genre: 'Crime',
      rating: 8.9,
      year: 1994
    },
    {
      title: 'Forrest Gump',
      genre: 'Drama',
      rating: 8.8,
      year: 1994
    }
  ];
  
  // Define function to get recommendations
  function getRecommendations() {
    // Get user input
    const genreInput = document.getElementById('genre').value.toLowerCase();
    const ratingInput = parseFloat(document.getElementById('rating').value);
    const yearInput = parseInt(document.getElementById('year').value);
  
    // Filter movies based on user input
    const filteredMovies = movies.filter(movie => {
      return movie.genre.toLowerCase().includes(genreInput) &&
             movie.rating >= ratingInput &&
             movie.year >= yearInput;
    });
  
    // Display recommended movies
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';
    if (filteredMovies.length > 0) {
      filteredMovies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
          <h3>${movie.title}</h3>
          <p>Genre: ${movie.genre}</p>
          <p>Rating: ${movie.rating}</p>
          <p>Year: ${movie.year}</p>
        `;
        recommendationsDiv.appendChild(movieDiv);
      });
    } else {
      const noResultsDiv = document.createElement('div');
      noResultsDiv.innerHTML = 'No results found.';
      recommendationsDiv.appendChild(noResultsDiv);
    }
  }
  
