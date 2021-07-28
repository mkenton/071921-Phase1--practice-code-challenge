
document.addEventListener('DOMContentLoaded', () => {

const pupsUrl = 'http://localhost:3000/pups'

//console.log(dogInfoDiv)

    fetch(pupsUrl)
    .then(r => r.json())
    .then(pups => {
    //console.log(pups)
    pups.forEach(pup => addPupButton(pup))

//  //add good dog fitler functionatlity
    dogFilter()   
})

})

 function addPupButton(eachPup){
    const dogBar = document.getElementById('dog-bar')
    //console.log(dogBar)
    //console.log(eachPup)
    const bttn = document.createElement('button')
    
    dogBar.append(bttn)
    const span = document.createElement('span')
    span.textContent = eachPup.name
    span.id = eachPup.id
    bttn.append(span)
    bttn.addEventListener('click', function(e){
    showPupInfo(eachPup)
    console.log(eachPup.id)
    })
    
    
    //addPupInfo()
    //console.log(eachPup.name)
}

function showPupInfo(pupInfo){
    const dogInfoDiv = document.getElementById('dog-info')
    //reset div before each display on click
    dogInfoDiv.innerHTML = ''
    //add img of dog to info div
    const img = document.createElement('img')
    img.src = pupInfo.image
    dogInfoDiv.append(img)
    //add dog name to dog info div
    const h2 = document.createElement('h2')
    h2.textContent = pupInfo.name
    dogInfoDiv.append(h2)
    //console.log(pupInfo.name)
    //add Good dog/bad dog button
    const bttnGB = document.createElement('button')
    bttnGB.id = "goodOrBad"
    //console.log(pupInfo.isGoodDog)
    if (pupInfo.isGoodDog === true) {
        bttnGB.textContent = 'Good Dog!';
        bttnGB.value = "good"
    } else {bttnGB.textContent = 'Bad Dog!'
        bttnGB.value = "bad"
    }
    
    dogInfoDiv.append(bttnGB)
    bttnGB.addEventListener('click', switchValue)
    
}

function switchValue(e){
    console.log(e.target)
    let dogBtn = document.querySelector('#goodOrBad')
    console.log(dogBtn)
    if (dogBtn.value === "good"){
        dogBtn.textContent = 'Bad Dog!'
        dogBtn.value = "bad"
    } else {
            dogBtn.textContent = 'Good Dog!'
            dogBtn.value = "good"
    }
    console.log(dogBtn.value)
}


function dogFilter(){
    let filter = document.querySelector('#good-dog-filter')
    filter.addEventListener('click', filterDogs)
}

function filterDogs(e){ 
    let filter = document.querySelector('#good-dog-filter')
    if (filter.textContent === "Filter good dogs: OFF"){
        filter.textContent = "Filter good dogs: ON"
        filter.value = "on"
    } else {
        filter.textContent = "Filter good dogs: OFF"
        filter.value = "off"
    }
    console.log(e.target.textContent)
}