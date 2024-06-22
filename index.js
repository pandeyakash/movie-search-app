//Selecting the container to store cards, input to get search keyword and button.
const container = document.querySelector(".container");
const input = document.querySelector("input");
const button = document.querySelector("button");

//Added event listener to the button which first clears the container.
//gets the value from search input
//calls the callFn() function with search keyword
//and clears the search input field
button.addEventListener("click", () => {
  container.innerHTML = "";
  let search = input.value;
  callFn(search);
  input.value = "";
});

//Handles the response fromthe API
//Calls displayData() function with the result
async function callFn(search) {
  let r1 = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=50a4750a&s=${search}`
  );
  let data = await r1.json();
  displayData(data["Search"]);
}

//Creates card with poster, title, type and year.
//Appends card to the container
function displayData(data) {
  data.forEach((ele) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let poster = document.createElement("img");
    poster.src = ele.Poster;

    let title = document.createElement("h3");
    title.textContent = `Title: ${ele.Title}`;
    title.classList.add("title");

    let releaseYear = document.createElement("div");
    releaseYear.classList.add("release-year");
    releaseYear.textContent = `Release Year: ${ele.Year}`;

    let type = document.createElement("div");
    type.textContent = ele.Type;
    type.classList.add("type");

    card.append(poster, title, type, releaseYear);
    container.append(card);
  });
}
