function createEpisodeCards(listOfEpisodes) {
  const rootEl = document.getElementById("container") // targetting root element in the DOM
  rootEl.innerHTML = ""
  
  const episodeList = document.createElement("ul")
    
  listOfEpisodes.forEach(episode => {
  const LI = document.createElement('li')
  LI.className = "episode-card"
  const 
    name = episode.name,
    season = episode.season,
    number = episode.number,
    summary = episode.summary?.substring(0,150) || "",
    image = episode.image?.medium || "img/no_image.jpg"

  // console.log(image, '<<<<<<<<<<<<');

  // const boolean = true
  // const fallback = "fallback" 
  // const orStatement = boolean || fallback
  // console.log(orStatement);

    
  const nameEl = document.createElement('h2') 
  nameEl.className = "episode-name"
  nameEl.innerText = name
    
  const formattedSeason = (""+season).padStart(2, "0") //type coercsion
  const formattedNumber = (""+number).padStart(2, "0") //type coercsion
  const episodeVersion = `Season: ${formattedSeason} - Episode: ${formattedNumber}`
    
  const episodeVersionH3 = document.createElement('h3')
  episodeVersionH3.innerText = episodeVersion
    
  const episodeImg = document.createElement("img")
  episodeImg.style.height = "167px"
  episodeImg.style.width = "298px"
  episodeImg.src = image
  episodeImg.alt = `${name} - ${episodeVersion}`

  const episodeSummary = document.createElement('div')
  episodeSummary.className = "summary"
  episodeSummary.innerHTML = `${summary}.....`

  // console.log(episodeSummary);
  // const readMore = document.createElement('button')
  // readMore.innerHTML = 'more'
  // readMore.addEventListener('click',() => {
  //   episodeSummary.classList.toggle('showSummary')
  // })
  // created h2 tag for episode name
  //S02E05 format
  // `S${season} - E${number}`

  //appended episode name to li element.
  LI.appendChild(nameEl)
  LI.appendChild(episodeImg)
  LI.appendChild(episodeVersionH3)
  // LI.appendChild(readMore)
  LI.appendChild(episodeSummary)
  episodeList.appendChild(LI) // appended li to ul element
 }) 
    
  rootEl.appendChild(episodeList)
}
  
  export default createEpisodeCards