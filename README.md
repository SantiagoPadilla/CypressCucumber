# CypressCucumber   ( I have a similar proyect with Typescript, Selenium and Cucumber in :  https://github.com/SantiagoPadilla/SeleniumTypeScript )
Project with Cypress, Cucumber, reporting with mochawesome

Steps after cloning the project

1) Install nodejs version (v19.8.1) npm version (9.5.1)
2) Install dependencies: npm install

The software was tested under 111 Chrome version

How to execute the features?

* Using the terminal:
  npx cypress run (It will execute all cases, give a report of all tests and take a screenshot of the failure)
    you could see the reports on the path: /cypress/reports/
    you could see the screenshots on the path: /cypress/screenshots/
  
  you can execute the test using this Cucumber tag:
  npx cypress run -e TAGS=@regression

* Another way to execute the tests would be to open the Cypress web application:
  npx cypress open
  
  
  Demo execute: 
  
  npx cypress run 
  
  Reporting in terminal: 
  
  ![image](https://user-images.githubusercontent.com/17440525/229240007-c4cf1a51-90b8-45e7-bac5-2aa593282c63.png)
  
  ![image](https://user-images.githubusercontent.com/17440525/229240664-5de1fbf9-5a86-4dda-aa31-3351abc43f91.png)

  
  Reporting with mochawesome :
  
  ![image](https://user-images.githubusercontent.com/17440525/229240543-ecc41b08-afc7-469d-8f23-4b636162beeb.png)

  
  Reporting with Cypress Application:
  ![image](https://user-images.githubusercontent.com/17440525/229240974-ac7d37f5-87a3-46f2-9f0f-f763ffbff8d6.png)

  
