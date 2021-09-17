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
import createSelect from './createSelect.js'


let allEpisodes = []

const url = 'https://api.tvmaze.com/shows/82/episodes';

function fetchData (url) {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    allEpisodes = data
    setup()
  })
}

function setup() {
  // allEpisodes = getAllEpisodes()
  createEpisodeCards(allEpisodes)
  createSelect(allEpisodes)
}

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
    createSelect(filteredEpisodes)


    console.log(filteredEpisodes);
    createEpisodeCards(filteredEpisodes)
})
const selectMenu = document.getElementById('episode') 
 selectMenu.addEventListener('change', () => {
  //  console.log(selectMenu.value, '<<<<');
  const filteredArray = allEpisodes.filter(episode => {

    return episode.name.toLowerCase().includes(selectMenu.value.toLowerCase()) || episode.summary.toLowerCase().includes(selectMenu.value.toLowerCase())
    
  }); createEpisodeCards(filteredArray)
})

window.onload = fetchData(url);