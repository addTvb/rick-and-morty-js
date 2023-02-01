"use strict";

let totalCharacters = document.querySelector("#total-characters");
let container = document.querySelector("#container");
// Load more
let loadMore = document.querySelector("#load-more");

const renderCards = (apiUrl) => {
  fetch(apiUrl, { method: "GET" })
    .then((res) => res.json())
    .then((parsedData) => {
      totalCharacters.textContent = parsedData.info.count;

      loadMore.dataset.apiUrl = parsedData.info.next;

      parsedData.results.forEach((character) => {
        const htmlCard = `          
            <div class="card">
                    <img id="character-image" src="${character.image}" alt="">
                    <div class="card-info">
                        <div class="card-row">
                            <div id="character-id">${character.id}</div>. <span id="character-name">${character.name}</span>
                        </div>
                        <div class="card-row status-row">
                            <div id="status-circle" data-status='${character.status}'></div> <span id="status-text">${character.status}</span>
                        </div>
                        <div class="card-row">
                            <div>Gender:</div> <span id="character-gender">${character.gender}</span>
                        </div>
                        <div class="card-row">
                            <div>Species:</div> <span id="character-species">${character.species}</span>
                        </div>
                    </div>
                </div>
                `;
        container.insertAdjacentHTML("beforeend", htmlCard);
      });
    });
};

const apiUrl = "https://rickandmortyapi.com/api/character/?page=1";
renderCards(apiUrl);

loadMore.onclick = () => renderCards(loadMore.dataset.apiUrl);
