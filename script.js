// //You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

// window.onload = setup;

import createEpisodeCards from './createEpisodeCards.js'
import createEpisodesSelect from './createEpisodesSelect.js'
import createShowSelect from './createShowSelect.js'
import getAllShows from './shows.js'

let allEpisodes = []

function fetchData (SHOW_ID) {
  const url = `https://api.tvmaze.com/shows/${SHOW_ID}/episodes`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    allEpisodes = data 
    setup()
  })
}

function setup() {
  createEpisodeCards(allEpisodes)
  createEpisodesSelect(allEpisodes)
  // createShowSelect()
}

const showSelect = document.getElementById("show")
showSelect.addEventListener("change", (event) => {
  const showID = event.target.value
  // console.log(showID);
  fetchData(showID)
})

// show all episodes 
const showAllEpisodesBtn = document.querySelector(".btn");
showAllEpisodesBtn.addEventListener("click", () => setup());

const selectMenu = document.getElementById('episode') 
selectMenu.addEventListener('change', () => {
  //  console.log(selectMenu.value, '<<<<');
  const filteredArray = allEpisodes.filter(episode => {

    return episode.name.toLowerCase().includes(selectMenu.value.toLowerCase()) || episode.summary.toLowerCase().includes(selectMenu.value.toLowerCase())
    
  }); createEpisodeCards(filteredArray)
})

const searchBox = document.querySelector('#search')
searchBox.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase()
  // console.log(firstEpisode);
  const filteredEpisodes = 
    allEpisodes.reduce((accumulator, currentEpisode) => {
      if(
        currentEpisode.name.toLowerCase().includes(value) || 
        currentEpisode.summary.toLowerCase().includes(value)
      ) {
        accumulator.push(currentEpisode)
      }
      return accumulator
    }, [])
    createEpisodesSelect(filteredEpisodes)

    console.log(filteredEpisodes);
    createEpisodeCards(filteredEpisodes)
})


window.onload = () => {

  const allShows = getAllShows()
  createShowSelect(allShows)
  const randomIndex = Math.round(Math.random() * allShows.length)
  const selectMenu = document.getElementById('show')
  selectMenu.value = allShows[randomIndex].id
  fetchData(allShows[randomIndex].id);
}