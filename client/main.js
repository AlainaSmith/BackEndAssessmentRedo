const happysContainer = document.querySelector('#happys-container')
const happyButton = document.querySelector('#happyButton')
const form = document.querySelector('form')
const baseURL = `http://localhost:3500/api/happys`



// document.getElementById("complimentButton").onclick = function () {
//     axios.get("http://localhost:3500/api/compliment/")
//         .then(function (response) {
//           const data = response.data;
//           alert(data);
//         });
//   };

//   document.getElementById("fortuneButton").onclick = function () {
//     axios.get("http://localhost:3500/api/fortune/")
//         .then(function (response) {
//           const data = response.data;
//           alert(data);
//         });
//   };

//   document.getElementById("jokeButton").onclick = function () {
//     axios.get("http://localhost:3500/api/joke/")
//         .then(function (response) {
//           const data = response.data;
//           alert(data);
//         });
//   };



const happysCallback = ({ data: happys }) => {
    displayHappys(happys)
    console.log('happy callback hit')
}
const errCallback = err => console.log(err)

const getHappys = () => 
axios.get(baseURL)
.then(happysCallback)
.catch(errCallback)

const createHappys = body => 
axios.post(baseURL, body)
.then(happysCallback)
.catch(errCallback)



  function submitHandler(e) {
    e.preventDefault()

    // let title = document.querySelector('#title')
    let source = document.querySelector('#source')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        // title: title.value,
        source: rating.value, 
        imageURL: imageURL.value
    }

    createHappys(bodyObj)

    // title.value = ''
    source.value = ''
    imageURL.value = ''
}


function createHappyCard(happy) {
    const happyCard = document.createElement('div')
    happyCard.classList.add('happy-card')

    happyCard.innerHTML = `<img alt='happy cover' src=${happy.imageURL} class="happy-cover"/>
    <p class="happy-title">${happy.title}</p>
`

    happysContainer.appendChild(happyCard)
}

function displayHappys(arr) {
    console.log('hit display happys')
    console.log(arr)
    happysContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createHappyCard(arr[i])
    }
}

happyButton.addEventListener('submit', submitHandler)

getHappys()
