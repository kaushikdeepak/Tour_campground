# Tour_campground
Landing page with option to write about the place visited by visitors 

![Image 1](https://github.com/kaushikdeepak/Tour_campground/blob/master/instances/Screenshot%202020-12-04%2016.49.47.png)  
![Image 2](https://github.com/kaushikdeepak/Tour_campground/blob/master/instances/Screenshot%202020-12-04%2016.50.16.png) 
![Image 3](https://github.com/kaushikdeepak/Tour_campground/blob/master/instances/Screenshot%202020-12-04%2016.51.15.png)

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.

YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy.  

## Features
* Users can create, edit, and remove campgrounds
* Users can review campgrounds once, and edit or remove only their own review 
* Search campground by name or location

Can be run locally or online cloud9 or goormide

## Can Run it locally
1. Install [mongodb](https://www.mongodb.com/)
2. Create a cloudinary account to get an API key and secret code

```
git clone https://github.com/kaushikdeepak/Tour_campground.git
cd Tour_campground
npm install
```

Create a .env file (or just export manually in the terminal) in the root of the project and add the following:  

```
DATABASEURL='<url>'
API_KEY=''<key>
API_SECRET='<secret>'
```

Run ```mongod``` in another terminal and ```node app.js``` in the terminal with the project.  

Then go to [localhost:3000](http://localhost:3000/).

