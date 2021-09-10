function createEpisodeCards(listOfEpisodes) {
    const rootEl = document.getElementById("root") // targetting root element in the DOM
    rootEl.innerHTML = ""
  //THANKS MICHAEL *****
      const episodeList = document.createElement("ul")
    
      listOfEpisodes.forEach(episode => {
        const LI = document.createElement('li')
        LI.className = "episode-card"
        
        const 
          name = episode.name,
          season = episode.season,
          number = episode.number,
          summary = episode.summary,
          image = episode.image.medium;
    
          const nameEl = document.createElement('h2') 
          nameEl.className = "episode-name"
          nameEl.innerText = name
    
          const formattedSeason = (""+season).padStart(2, "0") //type coercsion
          const formattedNumber = (""+number).padStart(2, "0") //type coercsion
          const episodeVersion = `S${formattedSeason}E${formattedNumber}`
    
          const episodeVersionH3 = document.createElement('h3')
          episodeVersionH3.innerText = episodeVersion
    
          const episodeImg = document.createElement("img")
          episodeImg.src = image
          episodeImg.alt = `${name} - ${episodeVersion}`

    
          const episodeSummary = document.createElement('div')
          episodeSummary.innerHTML = summary
    
          const readMore = document.createElement('button')
          readMore.innerHTML = 'More'



          readMore.addEventListener('click',() => {
            episodeSummary.classList.toggle('showSummary')

          })
        // created h2 tag for episode name
        //S02E05 format
        // `S${season} - E${number}`
        // 
        //appended episode name to li element.
        LI.appendChild(nameEl)
        LI.appendChild(episodeVersionH3)
        LI.appendChild(episodeImg)
        LI.appendChild(readMore)
        LI.appendChild(episodeSummary)
    
        episodeList.appendChild(LI) // appended li to ul element
      }) 
    
      rootEl.appendChild(episodeList)
  }
  
  export default createEpisodeCards