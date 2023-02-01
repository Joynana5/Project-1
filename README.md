♊︎ Brew 

Project Name: ♊︎ Brew
                                                 
In this project, I will. use data aquired from multiple sources to build a system that will recommend beer recipies  and local breweries to user based on their input. The recipies, food-pairing suggestions, brewing tips, and brewery location information were all encoded using open sorced APIs. 

Users must at least 21 years old to use this app! Please drink responsibly. 

<h2>API and Data Sample<h2>

https://api.punkapi.com/


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


Wireframe 














Plan 


| Date            | Task|
| ---             | ---                   |
|Jan 31st         |      MPM completed    |
|                 | APIs found            |
|                 |                        |
| Feb 1st         |  HTML completed      |
|                 |   Layout            |
|                 |    Drink inventory  |
|                 |                        |
|Feb 2nd          |   Features:          |
|                  |  Ingredient selector      |
|                 |   Personalized list       |
|                 |                        |
| Feb 3rd         |   personalized list       |
|                 | Random drink highlights    |
|                 |                          |
|Feb 4th          |    Troubleshooting       |
|                 |                         |
| Feb 5th         | Troubleshooting         |
|                 |                        |





