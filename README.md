# Recipe Application
### Description
This application is a simple recipe website that allows the user to view recipes of a specific type. To display the recipes this website uses the following API's

* Recipe categories - https://www.themealdb.com/api/json/v1/1/categories.php
* Recipes by category - https://www.themealdb.com/api/json/v1/1/filter.php?c=<category>
* Recipe by id - https://www.themealdb.com/api/json/v1/1/lookup.php?i=<id>

Cards are rendered showing the categories, meals and one large card is rendered showing the recipe. Once a user has drilled down to a particular recipe they can get back to the view other meals or categories by clicking the back button in the top left of the page.

### Setup
Before building and running the application you will need the most recent version of [Node](https://nodejs.org/en/) installed.

In order to use the application you will first need to clone the repo using the following command.

`git clone https://github.com/pdjenera/RecipeApp.git`

Then move into the directory that it creates

`cd RecipeApp`

Then install all of the node modules it requires

`npm install`

Then start the application with the following

`npm start`

Now the recipe app will be available at http://localhost:3000/
