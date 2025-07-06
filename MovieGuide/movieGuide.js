let InputBar = document.getElementById("inputBox");
let InpuBtn = document.getElementById("inputBtn");

// Function to fetch movie data
const getMovie = async (movie) => {
  let apiKey = "9d8f4275";
  let url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log("Fetched movie data:", data); // ✅ Add this
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

// On Search button click
InpuBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  let movieName = InputBar.value.trim();
  if (!movieName) return;

  let movie = await getMovie(movieName);
  if (!movie || movie.Response === "False") {
    alert("Movie not found!");
    return;
  }

  // Extract movie details safely
  const title = movie.Title || "N/A";
  const rating = movie.imdbRating || "N/A";
  const year = movie.Year || "N/A";
  const runtime = movie.Runtime || "N/A";
  const genre = movie.Genre || "N/A";
  const plot = movie.Plot || "N/A";
  const poster = movie.Poster !== "N/A" ? movie.Poster : null;

  // Create movie card
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    ${poster ? `<img src="${poster}" alt="Poster">` : `<span>No Poster</span>`}
    <div class="movie-card-content">
      <h2>${title}</h2>
      <p><strong>⭐ Rating:</strong> ${rating}</p>
      <p><strong>Year:</strong> ${year}</p>
      <p><strong>Runtime:</strong> ${runtime}</p>
      <p><strong>Genre:</strong> ${genre}</p>
      <p><strong>Plot:</strong> ${plot}</p>
    </div>
  `;

  // Append to result container
  const container = document.getElementById("resultContainer");
  container.innerHTML = ""; // clear previous
  container.appendChild(card);
});
