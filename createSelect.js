

function createSelect (listOfEpisodes){
    const selectMenu = document.getElementById('episode')
     selectMenu.innerHTML = ''
    listOfEpisodes.forEach(episode => {
        const formattedSeason = (""+episode.season).padStart(2, "0") //type coercsion
        const formattedNumber = (""+episode.number).padStart(2, "0") //type coercsion
        const episodeVersion = `S${formattedSeason}E${formattedNumber}`
        const option = document.createElement('option')
        option.text = `${episodeVersion} - ${episode.name}`
        option.value = `${episode.name}`
        selectMenu.appendChild(option)
    });
}

export default createSelect
