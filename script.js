const movies = [
  {
    title: "Night of the Living Dead",
    year: 1968,
    link: "https://archive.org/details/night_of_the_living_dead"
  },
  {
    title: "Plan 9 from Outer Space",
    year: 1959,
    link: "https://archive.org/details/Plan_9_from_Outer_Space_1959"
  },
  {
    title: "The Little Shop of Horrors",
    year: 1960,
    link: "https://archive.org/details/TheLittleShopOfHorrors1960"
  }
];

const movieList = document.getElementById("movie-list");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.className = "movie-card";

  div.innerHTML = `
    <h3>${movie.title}</h3>
    <p>Year: ${movie.year}</p>
    <a href="${movie.link}" target="_blank">
      <button>Watch / Download</button>
    </a>
  `;

  movieList.appendChild(div);
});
