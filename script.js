//selector
const petName = document.getElementById("petName");
const breedList = document.getElementById("breedList");
const petForm = document.getElementById("petForm");
const petGreet = document.getElementById("petGreet");
const petImage = document.getElementById("petImage");

//make a breed list
fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        for(let x in data.message){
            breedList.innerHTML += "<option value=" + x + ">" + x + "</option>";
        }
    })

// function getImage
const getImage = (e) => {
    e.preventDefault();
    fetch("https://dog.ceo/api/breed/" + breedList.value + "/images/random")
        .then(res => res.json())
        .then(data => {
            petGreet.innerHTML = `Hi, I am ${petName.value}`
            petImage.src = data.message
})
}

//when pressing submit, call getImage function
petForm.addEventListener("submit", getImage);    