import getAllShows from "./shows.js";

function createShowSelect (){
    const selectMenu = document.getElementById('show')
     selectMenu.innerHTML = ''
     const allShows = getAllShows()
    //  console.log(allShows);

    const fragment = new DocumentFragment()

     allShows.forEach(show => {
        const option = document.createElement('option')
        option.text = show.name
        option.value = show.id
        fragment.appendChild(option)
    });
    selectMenu.appendChild(fragment) 
}


export default createShowSelect
