let defaultMovies = ["Doctor Strange", "Eternals", "Big Hero 6", "Black Panther ", "42", "Pacific Rim", "Battleship", "Venom", "Draft Day", "Any Given Sunday" ];
let newMovies = [];
// IMPORTANT SELECTORS 
let ul = document.querySelector('.movie-list');
let addBtn = document.querySelector('.add-btn');
let sortAZ = document.querySelector('.sort-az-btn');
let sortZA = document.querySelector('.sort-za-btn');
let inputBox = document.querySelector('.form-input');


// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', loadList(defaultMovies));
window.addEventListener('click', deleteMovie)
addBtn.addEventListener('click', addNewMovie);
sortAZ.addEventListener('click', sortMoviesAtoZ);
sortZA.addEventListener('click', sortMoviesZtoA);


// Loading movies dinamically to the page
function loadList(param) {
    param.forEach((paramItem) => {
        updateUi(paramItem);
        newMovies.push(paramItem);
    })
}

// FUNCTIONS
// UPDATE UI
function updateUi(paramItem) {
        const fragment = document.createDocumentFragment();
        const newLi = document.createElement('li');
        newLi.setAttribute('class', 'movie-item');
        const newP = document.createElement('p');
        newP.setAttribute('class', 'movie-name');
        newP.innerText = `${paramItem}`;
        const inputBtn = document.createElement('input');
        inputBtn.setAttribute('type', 'button');
        inputBtn.setAttribute('class', 'delete-btn');
        inputBtn.setAttribute('value', 'Delete');
        newP.appendChild(inputBtn);
        newLi.appendChild(newP);
        fragment.appendChild(newLi);
        ul.appendChild(fragment);
    }


// ADD NEW MOVIE TITLE
function addNewMovie(event) {
    event.preventDefault();
    const newTitle = inputBox.value;
    if (newTitle == '') {
        return alert('Enter a Movie title')
    } else if (newMovies.includes(newTitle)) {
        return alert('That movie was already added')
    } else {
        updateUi(newTitle)
        newMovies.push(newTitle);
    }    
}

// SORT A to Z
function sortMoviesAtoZ(event) {
    event.preventDefault();
    newMovies = newMovies.sort();
    ul.innerHTML = '';
    newMovies.forEach((sortedMovie) => {
        updateUi(sortedMovie);
    })    
}

// SORT Z to A
function sortMoviesZtoA(event) {
    event.preventDefault();
    newMovies = newMovies.reverse();
    ul.innerHTML = '';
    newMovies.forEach((sortedMovie) => {
        updateUi(sortedMovie);
    })    
}

// SEARCH live


//DELETE
function deleteMovie(e) {
    const clickedBtn = e.target;
    if (clickedBtn.classList.contains('delete-btn') == true) {
        const parentBtn = clickedBtn.parentElement;
        const movieName = parentBtn.textContent;
            if (newMovies.includes(movieName)) {
                const indexOfMovie = newMovies.indexOf(movieName)
                newMovies.splice(indexOfMovie, 1);
                newMovies = newMovies;
                ul.innerHTML = '';
                newMovies.forEach((updatedMovie) => {
                    updateUi(updatedMovie);
                })
            }
    } 
    else {
        return
    }   
}

