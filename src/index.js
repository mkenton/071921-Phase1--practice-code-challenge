
document.addEventListener('DOMContentLoaded', () => {

const pupsUrl = 'http://localhost:3000/pups'

//console.log(dogInfoDiv)

    fetch(pupsUrl)
    .then(r => r.json())
    .then(pups => {
    //console.log(pups)
    pups.forEach(pup => addPupButton(pup))
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
    dogInfoDiv.innerHTML = ''
    const img = document.createElement('img')
    img.src = pupInfo.image
    dogInfoDiv.append(img)
    const h2 = document.createElement('h2')
    h2.textContent = pupInfo.name
    dogInfoDiv.append(h2)
    console.log(pupInfo.name)
}