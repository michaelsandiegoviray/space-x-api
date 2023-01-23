//Example fetch using pokemonapi.co
document.getElementById("crew").addEventListener("click", getFetch);

function getFetch() {
  const url = `https://api.spacexdata.com/v4/crew`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      data.forEach((a) => console.log(a.image));
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.getElementById("capsule").addEventListener("click", getCapsules);
function getCapsules() {
  const url = `https://api.spacexdata.com/v4/capsules`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.getElementById("companyInfo").addEventListener("click", compInfo);

function compInfo() {
  const url = `https://api.spacexdata.com/v4/company`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.getElementById("core").addEventListener("click", getCore);

function getCore() {
  const url = `https://api.spacexdata.com/v4/cores`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.getElementById("dragons").addEventListener("click", getDragons);

function getDragons() {
  const url = `https://api.spacexdata.com/v4/dragons`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.getElementById("landpads").addEventListener("click", getLandPads);

function getLandPads() {
  const url = `https://api.spacexdata.com/v4/launchpads`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.getElementById("payloads").addEventListener("click", getPayload);

function getPayload() {
  const url = `https://api.spacexdata.com/v4/payloads`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.getElementById("ships").addEventListener("click", getShips);

function getShips() {
  const url = `https://api.spacexdata.com/v4/ships`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.getElementById("starlink").addEventListener("click", getStarlink);

function getStarlink() {
  const url = `https://api.spacexdata.com/v4/starlink`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.getElementById("launches").addEventListener("click", getLaunches);

function getLaunches() {
  const url = `https://api.spacexdata.com/v4/launches`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

document.getElementById("launchpads").addEventListener("click", getLaunchPads);

function getLaunchPads() {
  const url = `https://api.spacexdata.com/v4/launchpads`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

/*

document.getElementById('').addEventListener('click', ______)

function (){

const url = ``

fetch(url)
.then((res) => res.json())
.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.log(`error ${err}`)
})


}


*/
