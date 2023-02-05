# ♊︎ Brew 

## Project Name: ♊︎ Brew
                                                 
In this project, I will use data aquired from PunkAPI to showcase a variety of beers to users based on their input. Twin brew allows users to search by beer name, type, alcohol content and color. 

Users must at least 21 years old to use this app! Please drink responsibly. 

## API and Data Sample

https://api.punkapi.com/

```javascript
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
```

## Wireframe 

<img width="1252" alt="Screenshot 2023-02-01 at 8 53 34 AM" src="https://user-images.githubusercontent.com/114016876/216062060-56c87a31-55c8-4b58-8960-6a293cdccecf.png">


## MVP 

- Provide users with a wide selection of breers.
- When selected, model box appears providing additional information about the beer.
- Weekly highlight listed on mainn page to offer suggestions for users who may be in the mood to try something new.


## Post MVP

- Local brewery suggestions based on the users location
- Rating option
- Best practice tips to help beginners and experts a like to make a profesional tasting brew!
- Custom list options 

## Plan 


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
|                 | * Random drink highlights    |
|                 |                          |
|Feb 4th          |    Troubleshooting       |
|                 |                         |
| Feb 5th         | Troubleshooting         |
|                 |                        |

Will include, if time allows: 

* Rating option
* Local Brewery 
