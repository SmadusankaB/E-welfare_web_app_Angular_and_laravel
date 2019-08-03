# E-welfare web app
“E-Welfare Web app” is a student and information management system . 
Features are 
1.Real time admin dashboard
2. REST full web services
3. Route guards
4. Token-based authentication
5. Interactive forms and validation
6. Sensitive data encryption
7. Integrated header interceptor
8. Integrated resolver service.

Technologies
1. Frontend - Angular 5.
2. Backend - Laravel 5.5 and MySQL.

Run Angular app (Frontend) - steps, 
1. Download frontend from the repository by running 
"git clone https://github.com/Seshirantha/welfare_web_app.git".
2. Unzip downloaded file and navigate to frontend folder.
3. Then follow general steps on building an Angular application.

This project was generated with Angular CLI version 1.6.3.

Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

Running unit tests
Run ng test to execute the unit tests via Karma.

Running end-to-end tests
Run ng e2e to execute the end-to-end tests via Protractor.

Further help
To get more help on the Angular CLI use ng help or go check out the Angular CLI README.

Run Laravel app (Backend) - steps, 
1. Navigate to backend folder and run "composer update" - It will download all the dependancies for you.
2. Run apache server and MySQL server (It can be done by tools like XAMPP, WAMP, MAMP etc).
3. Create a database.
4. Update values in .env file.
5. Run, "php artisan config:cache" - It will configure the application chache memory according to your file system.
6. Run "php artisan migrate" - It will create all the table for you.
7. Run "php artisan serve" - for a dev server.


