// Clay Enciu

// when launches clicked, change plain text and hide content, then show the cards and update their information
document.querySelector('#getLaunches').addEventListener("click", ()=>{
    
//change plain text
    document.querySelector('#title').innerHTML = "Rocket Launches"
    document.querySelector('#subTitle').innerHTML = "Rocket launches from 2010"
    document.querySelector('#content').innerHTML = ""
    
    //call api
    axios.get("https://lldev.thespacedevs.com/2.2.0/launch/?limit=4&year=2010")
    // once api finished call, then...
    .then((e) => {
        // set the data equal to an easy to use variable
        let response = e.data.results
    
        for (i=0; i <4; i++){
            //select each card using i, update each of the cards titles, images, and descriptions
            document.querySelector('#card' + [i + 1]).innerHTML = response[i].status.description 
            document.querySelector('#cardTitle' + [i + 1]).innerHTML = response[i].name
            document.querySelector('#cardimg' + [i + 1]).src = response[i].image
        }
        //show the cards
        document.querySelector('#linkContent').style.display = "flex"
    })
})

//rinse and repeat of the previous, but with Astronaut API instead, 
document.querySelector('#getAstronauts').addEventListener("click", ()=>{
    //change plain text
    document.querySelector('#title').innerHTML = "Astronauts"
    document.querySelector('#subTitle').innerHTML = ""
    document.querySelector('#content').innerHTML = ""
//call api
    axios.get("https://lldev.thespacedevs.com/2.2.0/astronaut/?limit=4")
    //then...
    .then((e) =>{
        // set the data equal to an easy to use variable
        let response = e.data.results

        for (i=0; i<4; i++){
            //select each card using i, update each of the cards titles, images, and descriptions
            document.querySelector('#card' + [i + 1]).innerHTML = "Status: " + response[i].status.name + "<br>" + response[i].bio  + "<br>"
            document.querySelector('#cardTitle' + [i + 1]).innerHTML = response[i].name
            document.querySelector('#cardimg' + [i + 1]).src = response[i].profile_image
        }
        //show the cards
        document.querySelector('#linkContent').style.display = "flex"
    })
})