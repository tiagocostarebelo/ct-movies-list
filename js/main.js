let movies = ["42", "Straight Outta Compton", "Barbershop", "Barbershop 2: Back in Business", "Barbershop: The Next Cut", "Juice", "Gang Related", "Doctor Strange", "Black Panther", "The Dark Knight Trilogy"]
let moviesObj = [
    {
        id: 1,
        title: "42"
    },
    {
        id: 2,
        title: "Straight Outta Compton"
    },
    {
        id: 3,
        title: "Barbershop"
    },
    {
        id: 4,
        title: "Barbershop 2: Back in Business"
    },
    {
        id: 5,
        title: "Barbershop: The Next Cut"
    },
    {
        id: 6,
        title: "Juice"
    },
    {
        id: 7,
        title: "Gang Related"
    },
    {
        id: 8,
        title: "Doctor Strange"
    },
    {
        id: 9,
        title: "Black Panther"
    },
    {
        id: 10,
        title: "The Dark Knight Trilogy"
    },
]

let justTitles = [];
let sortedMoviesAz = [];
let sortedMoviesZa = [];

//USEFUL SELECTORS
let fragment = document.createDocumentFragment();
let ul = document.querySelector('.movie-list');
let sortAZ = document.querySelector('.sort-up-btn');
let sortZa = document.querySelector('.sort-down-btn');
let addTitle = document.querySelector('.add-btn');



//LOAD DEFAULT MOVIE LIST DINAMICALLY ON PAGE LOAD
document.addEventListener('DOMContentLoaded', loadList());

function loadList() {
    movies.forEach((movie, index) => {
        appendChildren(movie, index);
        justTitles.push(movie);
    })
}

//SORT A to Z
sortAZ.addEventListener('click', () => {
    if (sortedMoviesAz == '') {
        sortedMoviesAz = justTitles.sort();
        ul.innerHTML = '';
        sortedMoviesZa = [];
        sortedMoviesAz.forEach((movie) => {
        appendChildren(movie)
        })
    } else {
        return;
    }
});

//SORT Z to A
sortZa.addEventListener('click', () => {
    if (sortedMoviesZa == '') {
        sortedMoviesZa = justTitles.reverse();
        ul.innerHTML = '';
        sortedMoviesAz = [];
        sortedMoviesZa.forEach((movie) => {
        appendChildren(movie)
        })
    } else {
        return;
    }
});

//ADD TITLE 
addTitle.addEventListener('click', (e) => {
    e.preventDefault();
    const newTitle = document.querySelector('input').value;
    if (newTitle == '') {
        return alert('Enter a Movie title')
    } else {
        appendChildren(newTitle)
        justTitles.push(newTitle);
    }    
})

//DELETE TITLE 



//ADDING ELEMENTS SUPPORT FUNCTION
function appendChildren(param, i) {
    const newLi = document.createElement('li');
    const newP = document.createElement('p');
    const newBtn = document.createElement('button');
    newBtn.textContent = 'Delete';
    newBtn.classList.add('delete-btn');
    newBtn.id = 'deleteBtn' + i; 
    newP.innerHTML = `${param}`;
    newP.appendChild(newBtn);
    newLi.appendChild(newP);
    fragment.appendChild(newLi);
    return ul.appendChild(fragment);
}


