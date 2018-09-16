# my-app
Author: Raymond Chau
Email: raymond.chau98@gmail.com

                    /////////////////////////////       Introduction       /////////////////////////////
This is my submission for Phase 1 of NZMSA. Currently the web app takes in 2 values: City, Country Code. When the button is pressed an API call using openweathermap's api. JSON is returned and only the country, temperature, humidity and desciption is returned.


                  /////////////////////////////           Issues         /////////////////////////////

Currently tested only with Google Chrome. Hosting the web app as localhost there are no issues other than weird spacing issues for the material design cards when the window is maximised. Issue is not apparent if the window is not locked and smaller than when it is maximised. 

There are issues when running the web app using azure. When the fields are correct and the button is pressed Google Chrome will block the site from executing the typescript code. 

1. To solve this, on the upper right hand side of the browser, at the end of the address bar there should be a shield icon. click it. It      should say insecure content blocked. 
2. click load unsafe scipts. 
3. This should enable the web app to function properly
