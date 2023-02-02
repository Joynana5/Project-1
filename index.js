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
  slides[slideIndex - 1].style.display = "block";
}

//might be able to delete .....setting up the 2 initial states to hold the search strings...
// const [searchString, setSearchString] = useState('')
// const [searchResult, setSearchResult] = useState([])

// search by name function
const search = document.querySelector('#search');
// const todos = document.querySelectorAll('ul li');
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
    ? (notFound.style.display = 'block')
    : (notFound.style.display = 'none');

}

//searching field 


document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault()
  let seachinput = document.getElementById('searchinput').value
})
let dropdown = document.getElementById('dropdown').value
let tempURL = ''
switch (dropdown) {
  case 'brandName': `https://api.punkapi.com/v2/beers?&beer_name=${beer_name}`
  case 'ingredients': ``
}


// ocument.getElementById('submit').addEventListener('click', (e) => {
//   e.preventDefault()
//   let searchinput = document.getElementById('searchinput').value
//   let dropdown = document.getElementById('dropdown').value
//   let tempURL = ''

//   switch (dropdown) {
//     case 'keyword':
//       tempURL = `${url}${APIKey}=*&keyword=${searchinput}`
//       getData(tempURL)
//       break;
//     case 'postalCode':
//       tempURL = `${url}${APIKey}=*&postalCode=${searchinput}`
//       getData(tempURL)
//       break;
//     case 'city':
//       tempURL = `${url}${APIKey}=*&city=${searchinput}`
//       getData(tempURL)

//       break;

//     default:
//     // code block
//   }



// })

// async function getData(tempURL) {
//   let res = await fetch(`${tempURL}`)
//   let json = await res.json()
//   console.log(json._embedded.events)
// }


async function getBrand(beer_name = 'Buzz') {
  const url = `https://api.punkapi.com/v2/beers?&beer_name=${beer_name}`

  try {
    const res = await fetch(url)
    const json = await res.json()
    console.log(json);
    return json;

  } catch (error) {
    console.log('');
  }
}
form.addEventListener('submit', async e => {
  e.preventDefault()
  const beer = await getBrand(input.value)
  console.log(beer)
  // renderList(beer)
})

getBrand()