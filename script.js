const movies = [
  { id: 1, title: "Night of the Living Dead", year: 1968 },
  { id: 2, title: "Plan 9 from Outer Space", year: 1959 },
  { id: 3, title: "The Little Shop of Horrors", year: 1960 }
];

const container = document.getElementById("movies");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.className = "movie";
  div.innerHTML = `
    <h3>${movie.title}</h3>
    <p>Year: ${movie.year}</p>
    <button onclick="alert('Movie ID: ${movie.id}')">View Details</button>
  `;
  container.appendChild(div);
});
