// const URL = ('https://api.punkapi.com/v2/beers')
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
}

//might be able to delete .....setting up the 2 initial states to hold the search strings...
// const [searchString, setSearchString] = useState('')
// const [searchResult, setSearchResult] = useState([])

// search by name function
const search = document.querySelector('#search');
const todos = document.querySelectorAll('ul li');
const notFound = document.querySelector('#notFound');

// search.addEventListener('keyup', filterFunctionality);
function filterFunctionality(e) {
  let searching = e.target.value.toLowerCase();

  // Filters the todo
  [...todos].forEach(todo => {
    let todoContent = todo.textContent;
    if (todoContent.toLowerCase().includes(searching)) {
      todo.style.display = 'block';
    } else {
      todo.style.display = 'none';
    }
  });

  // Displays No Todo Found
  let result = [...todos].every(todo => {
    return todo.style.display === 'none';
  });

  result === true
    ? (notFound.style.display = 'block') : (notFound.style.display = 'none');
}


//searching field 

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault()

  let value = document.getElementById('searchinput').value
  let dropdown = document.getElementById('dropdown').value
  let tempURL = ''
  //+value will return a numner for ebc and abv
  //tyoeof vales in console log will let you know what tyoe of data is in there,
  console.log(value, dropdown)
  switch (dropdown) {
    case 'brandName':
      tempURL = `https://api.punkapi.com/v2/beers?&beer_name=${value}`
      getData(tempURL)
      break
    case 'ABV':
      tempURL = `https://api.punkapi.com/v2/beers?&abv_gt=${value}`
      getData(tempURL)
      break
    case 'EBC':
      tempURL = `https://api.punkapi.com/v2/beers?&ebc_gt=${value}`
      getData(tempURL)
      break

    default:
    //  code block
  }

})

// let data;

async function getData(tempURL) {
  let res = await fetch(`${tempURL}`)
  let json = await res.json()
  console.log(json)
  displayItems(json)
  // data = json
  // return json;
}

async function displayItems(data) {
  data.forEach((e, i) => {
    // console.log(e.image_url)
    const motherdiv = document.querySelector('.display')
    const div = document.createElement('div')
    div.setAttribute('value', `${i}`)

    const img = document.createElement('img');

    let beerName = document.createElement('div')
    beerName.setAttribute('class', 'beerName')
    beerName.innerText = e.name;

    // const p = document.createElement('p')
    const span = document.createElement('span')
    span.textContent = e.name
    div.append(span)

    img.classList.add('beer')
    img.src = e.image_url;
    div.style.backgroundSize = 'contain'
    div.setAttribute('class', 'poster')
    img.appendChild(beerName)
    motherdiv.appendChild(div)
    div.appendChild(img)
  })

  document.querySelectorAll('.poster')
    .forEach(el => {
      el.addEventListener('click', (e) => {
        const value = e.target.getAttribute('value')
        // console.log(value)
        console.log(data[value]);
        // el.getElements
        modalContent.innnerHTML = ''
        const title = document.createElement('span')
        const description = document.createElement('p')
        const proof = document.createElement('p')
        const parings = document.createElement('p')
        const ingredients = document.createElement('p')

        title.innerHTML = data[value].name
        description.innerHTML = data[value].description
        proof.innerHTML = data[value].abv
        // parings.innerHTML = data[value].food_paring.toString()
        // ingredients.innerHTML = data[value].

        modalContent.appendChild(title)
        modalContent.appendChild(description)
        modalContent.appendChild(proof)
        // modal.appendChild(parings)

        modal.style.display = "block";
      })
    }
    )
}


// Get the modal
const modal = document.getElementById("modal");
const modalContent = document.querySelector('.modal-content')
// Get the button that opens the modal
// const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}