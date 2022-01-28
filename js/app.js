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
inputBox.addEventListener('keyup', searchLive);


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
        inputBtn.setAttribute('class', 'btn delete-btn');
        inputBtn.setAttribute('value', 'Delete');
        
        newLi.appendChild(newP);
        newLi.appendChild(inputBtn);
        fragment.appendChild(newLi);
        ul.appendChild(fragment);
    }


// ADD NEW MOVIE TITLE
function addNewMovie(event) {
    event.preventDefault();
    const newTitle = inputBox.value;
    const titleCapitalize = newTitle.split(" ");
    for (let i = 0; i < titleCapitalize.length; i++) {
        titleCapitalize[i] = titleCapitalize[i].charAt(0).toUpperCase() + titleCapitalize[i].slice(1);
    }
    const newTitleCapitalized = titleCapitalize.join(" ");
    console.log(newTitleCapitalized)
    if (newTitleCapitalized == '') {
        return alert('Enter a Movie title')
    } else if (newMovies.includes(newTitleCapitalized)) {
        return alert('That movie was already added')
    } else {
        newMovies.push(newTitleCapitalized);
        updateUi(newTitleCapitalized);
        inputBox.value = '';     
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

//SEARCH live Case Sensitive
// function searchLive() {
//     let inputValue = inputBox.value
//     let movieListItem = ul.querySelectorAll('.movie-item');
//     for (let i = 0; i < movieListItem.length; i++) {
//         let paragraph = movieListItem[i].getElementsByTagName('p')[0];
//         if(paragraph.innerHTML.indexOf(inputValue) > -1) {
//             movieListItem[i].style.display = '';
//         } else {
//             movieListItem[i].style.display = 'none';
//         }
//     }
// }

//Search Live Case Insensitive
function searchLive() {
    let inputValue = inputBox.value.toLowerCase();
    let movieListItem = ul.querySelectorAll('.movie-item');
    for (let i = 0; i < movieListItem.length; i++) {
        let paragraph = movieListItem[i].getElementsByTagName('p')[0];
        let paragraphs = paragraph.textContent.toLowerCase();
        if(paragraphs.indexOf(inputValue) > -1) {
            movieListItem[i].style.display = '';
        } else {
            movieListItem[i].style.display = 'none';
        }
    }
}


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

