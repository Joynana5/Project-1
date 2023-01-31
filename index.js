// const URL = ('https://api.punkapi.com/v2/beers')

async function getBeers(beer_name) {
  const url = `https://api.punkapi.com/v2/beers/${beer_name}`

  try {
    const res = await fetch(url)
    const json = await res.json()
    console.log(json);
    return json;

  } catch (error) {
    console.log('');
  }
}

getBeers('')
