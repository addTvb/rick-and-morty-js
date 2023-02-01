"use strict";

let image = document.querySelector("#random-image");
let id = document.querySelector("#random-id");
let name = document.querySelector("#random-name");
// Buttons
let favButton = document.querySelector("#add-to-fav");
let randomButton = document.querySelector("#get-random");

const getRandomNumber = () => Math.floor(Math.random() * (826 - 1 + 1) + 1);
let currentCharacter = null;

const getRandomCharacter = () => {
  fetch(`https://rickandmortyapi.com/api/character/${getRandomNumber()}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((parsedData) => {
      currentCharacter = parsedData;

      image.src = parsedData.image;
      id.textContent = parsedData.id;
      name.textContent = parsedData.name;
    });
};
getRandomCharacter();

randomButton.onclick = getRandomCharacter;

favButton.onclick = () => {
  let favCharacters = localStorage.getItem("favorite-characters");
  if (favCharacters) {
    let parsedCharacters = JSON.parse(favCharacters);
    if (!parsedCharacters.includes(currentCharacter.id)) {
      parsedCharacters.push(currentCharacter.id);
    }
    localStorage.setItem(
      "favorite-characters",
      JSON.stringify(parsedCharacters)
    );
  } else {
    let characterArray = JSON.stringify([currentCharacter.id]);
    localStorage.setItem("favorite-characters", characterArray);
  }
};

const age = [
  {
    id: 425,
    name: "Pizza-person",
    status: "Alive",
    species: "Humanoid",
    type: "Pizza",
    gender: "Male",
    origin: {
      name: "Earth (Pizza Dimension)",
      url: "https://rickandmortyapi.com/api/location/71",
    },
    location: {
      name: "Earth (Pizza Dimension)",
      url: "https://rickandmortyapi.com/api/location/71",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/425.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/10"],
    url: "https://rickandmortyapi.com/api/character/425",
    created: "2018-04-16T21:46:18.362Z",
  },
  {
    id: 472,
    name: "Baby Rick",
    status: "Alive",
    species: "Human",
    type: "Clone",
    gender: "Male",
    origin: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/472.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/28"],
    url: "https://rickandmortyapi.com/api/character/472",
    created: "2018-05-22T17:11:53.084Z",
  },
  {
    id: 573,
    name: "Snake Hitler",
    status: "Dead",
    species: "Animal",
    type: "Snake",
    gender: "Male",
    origin: {
      name: "Snake Planet",
      url: "https://rickandmortyapi.com/api/location/78",
    },
    location: {
      name: "Snake Planet",
      url: "https://rickandmortyapi.com/api/location/78",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/573.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/36"],
    url: "https://rickandmortyapi.com/api/character/573",
    created: "2020-05-07T12:12:53.568Z",
  },
];
