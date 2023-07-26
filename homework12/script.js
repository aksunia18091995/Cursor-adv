const filmPage = document.getElementById('filmPage');
const planetsPage = document.getElementById('planetsPage');
const filmNumberInput = document.getElementById('filmNumberInput');
const getInfoBtn = document.getElementById('getInfoBtn');
const characterList = document.getElementById('characterList');
const showPlanetsBtn = document.getElementById('showPlanetsBtn');
const planetList = document.getElementById('planetList');
const showCharactersBtn = document.getElementById('showCharactersBtn');
const characterPhotos = {
    'https://swapi.dev/api/people/1/': './img/img1.png',
    'https://swapi.dev/api/people/2/': './img/img2.png',
    'https://swapi.dev/api/people/3/': './img/img3.png',
    'https://swapi.dev/api/people/4/': './img/img4.png',
    'https://swapi.dev/api/people/5/': './img/img5.png',
    'https://swapi.dev/api/people/6/': './img/img6.png',
    'https://swapi.dev/api/people/7/': './img/img6.png',
    'https://swapi.dev/api/people/8/': './img/img8.png',
    'https://swapi.dev/api/people/9/': './img/img9.png',
    'https://swapi.dev/api/people/10/': './img/img10.png',
    'https://swapi.dev/api/people/11/': './img/img11.png',
    'https://swapi.dev/api/people/12/': './img/img12.png',
    'https://swapi.dev/api/people/13/': './img/img13.png',
    'https://swapi.dev/api/people/14/': './img/img14.png',
    'https://swapi.dev/api/people/15/': './img/img15.png',
    'https://swapi.dev/api/people/16/': './img/img16.png',
    'https://swapi.dev/api/people/18/': './img/img18.png',
    'https://swapi.dev/api/people/19/': './img/img19.png',
    'https://swapi.dev/api/people/20/': './img/img20.png',
    'https://swapi.dev/api/people/21/': './img/img21.png',
    'https://swapi.dev/api/people/22/': './img/img22.png',
    'https://swapi.dev/api/people/23/': './img/img23.png',
    'https://swapi.dev/api/people/24/': './img/img24.png',
    'https://swapi.dev/api/people/25/': './img/img25.png',
    'https://swapi.dev/api/people/26/': './img/img26.png',
    'https://swapi.dev/api/people/27/': './img/img27.png',
    'https://swapi.dev/api/people/28/': './img/img28.png',
    'https://swapi.dev/api/people/29/': './img/img29.webp',
    'https://swapi.dev/api/people/30/': './img/img30.png',
    'https://swapi.dev/api/people/31/': './img/img31.jpeg',
    'https://swapi.dev/api/people/32/': './img/img32.jpeg',
    'https://swapi.dev/api/people/33/': './img/img33.png',
    'https://swapi.dev/api/people/34/': './img/img34.webp',
}
const planetPhotos = {
    'Tatooine': './img/tatooine.png',
    'Alderaan': './img/alderaan.png',
    'Yavin IV': './img/yavin.png',
    'Hoth': './img/hoth.png',
    'Dagobah': './img/dagobah.png',
    'Bespin': './img/bespin.png',
    'Endor': './img/endor.png',
    'Naboo': './img/naboo.png',
    'Coruscant': './img/coruscant.png',
    'Kamino':'./img/kamino.png'
}

getInfoBtn.addEventListener('click', () => {
    const filmNumber=filmNumberInput.value

    fetch(`https://swapi.dev/api/films/${filmNumber}/`)
        .then(response => response.json())
        .then(data => {
            const characters = data.characters;
            characterList.innerHTML = '';

            characters.forEach(characterUrl => {
                fetch(characterUrl)
                    .then(response => response.json())
                    .then(characterData => {
                        const name = characterData.name;
                        const birthYear = characterData.birth_year;
                        const gender = characterData.gender;
                        const photoUrl = characterPhotos[characterUrl];

                        let genderIcon = '';

                        if (gender === 'male') {
                            genderIcon = 'fa-mars';
                        } else if (gender === 'female') {
                            genderIcon = 'fa-venus';
                        } else {
                            genderIcon = 'fa-genderless';
                        }

                        const listItem = document.createElement('li');
                        listItem.innerHTML = `
                            <div class="info">
                                <img src="${photoUrl}" alt="${name}" class="character-photo">
                                <div class="info_text">
                                    <span class="character-name"> ${name} </span> <br>
                                    <span class="character-details">Birth Year: ${birthYear}</span> <br>
                                    <span class="character-details">Gender:
                                        <i class="fas ${genderIcon}"></i>
                                    </span>
                                </div>
                            </div>
                        `;

                        characterList.appendChild(listItem);
                    });
            });
        });
    
        filmPage.style.display = 'block';
        planetsPage.style.display = 'none';
});

showPlanetsBtn.addEventListener('click', () => {
    fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => {
            const planets = data.results;
            nextPlanetPage = data.next;

            planetList.innerHTML = '';

            planets.forEach(planetData => {
                const name = planetData.name;
                const population = planetData.population;
                const climate = planetData.climate;

                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div class="info-planet">
                        <img src="${planetPhotos[name]}" alt="${name}" class="planet-photo">
                        <div class="planet-info">
                            <span class="planet-name">Name: ${name}</span> <br>
                            <span class="planet-population">Population: ${population}</span> <br>
                            <span class="planet-climate">Climate: ${climate}</span>
                        </div>
                    </div>
                `;

                planetList.appendChild(listItem);
            });

            if (nextPlanetPage !== null) {
                createNextButton();
            }
        });

        filmPage.style.display = 'none';
        planetsPage.style.display = 'block';
});

let nextPlanetPage = '';
let currentPage = 1;

function getNextPlanetPage() {
    if (nextPlanetPage !== ' ') {
        fetch(`https://swapi.dev/api/planets/?page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                planetList.innerHTML = '';
                const planets = data.results;
                nextPlanetPage = data.next;
                currentPage++;

                planets.forEach(planetData => {
                    const name = planetData.name;
                    const population = planetData.population;
                    const climate = planetData.climate;

                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <div class="info-planet">
                            <img src="${planetPhotos[name]}" alt="${name}" class="planet-photo">
                            <div class="planet-info">
                                <span class="planet-name">Name: ${name}</span> <br>
                                <span class="planet-population">Population: ${population}</span> <br>
                                <span class="planet-climate">Climate: ${climate}</span>
                            </div>
                        </div>
                    `;

                    planetList.appendChild(listItem);
                });

                if (nextPlanetPage !== null) {
                    createNextButton();
                }
            });
    }
}

function createNextButton() {
    const nextButton = document.getElementById('nextButton');
  if (nextButton) {
    nextButton.style.display = 'block';
  } else {
    const newNextButton = document.createElement('button');
    newNextButton.textContent = 'Next';
    newNextButton.id = 'nextButton';
    newNextButton.addEventListener('click', getNextPlanetPage);
    planetList.appendChild(newNextButton);
  }
}


showCharactersBtn.addEventListener('click', () => {
    filmPage.style.display = 'block';
    planetsPage.style.display = 'none';
});