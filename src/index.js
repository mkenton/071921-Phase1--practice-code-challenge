
document.addEventListener('DOMContentLoaded', () => {

const pupsUrl = 'http://localhost:3000/pups'


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
    bttn.textContent = eachPup.name
    dogBar.append(bttn)

    
    //console.log(eachPup.name)
}