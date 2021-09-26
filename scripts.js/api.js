

async function getCharacters(url, container) {
    const response = await fetch(url);
        console.log(response);
  
    const characters = await response.json();
    console.log(characters);
  
    container.innerHTML = '';
  
    const filterAlive = (characters) => {
        if (characters.status === "Alive") {
            return true;
        }

    };

    const filterdAlive = characters.filter(filterAlive)
    console.log(filterdAlive)

    for (let i = 0; i < filterdAlive.length; i++) {


      if (i === 10) {
        break;
      }

      container.innerHTML += `<div class="result">
      <h1>${filterdAlive[i].name}</h1>
      <img src="${filterdAlive[i].img}"></img>
      <h2>${filterdAlive[i].status}</h2>
      </div>`;
    };
  };

  






