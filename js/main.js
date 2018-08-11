import fetchJsonp from "fetch-jsonp";

const petForm = document.querySelector("#pet-form");

petForm.addEventListener.apply("submit", fetchAnimals);

// Fetch Animals From Api
function fetchAnimals(e) {
  e.preventDefault();

  // Get User Input
  const animal = document.querySelector("#animal").value;
  const zip = document.querySelector("#zip").value;

  // Fetch Pets
  fetchJsonp(`http://api.petfinder.com/pet.find`);
}
