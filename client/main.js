document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:3500/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:3500/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("jokeButton").onclick = function () {
    axios.get("http://localhost:3500/api/joke/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };


// 

  const createMovie = body => axios.post(baseURL, body).then(moviesCallback).catch(errCallback)



  function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let source = document.querySelector('#source')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        source: rating.value, 
        imageURL: imageURL.value
    }

    createHappy(bodyObj)

    title.value = ''
    source.value = ''
    imageURL.value = ''
}


function createHappySection(happy) {
    const happySection = document.createElement('div')
    happySection.classList.add('happy-section')



    happysContainer.appendChild(happyCard)
}