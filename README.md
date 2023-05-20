# REDCOMM RECRUITMENT TEST - NOTES APP
This project is intended for the recruitment test purposes of Redcomm. It is a Notes App built using Laravel & Nuxt 3.

## Notes
Ensure that you have installed Node and Composer in order to follow the installation process.

## Installations

## Backend Installations
Inside the **back-end** directory, open the terminal.

1. Install Composer Dependencies
```bash
    composer install
```
2. Install NPM Dependencies
```bash
    npm install
```
3. Create a Copy of your .env file
```bash
    cp .env.example .env
```
4. Generate an App Encryption Key
```bash
    php artisan key:generate
```
5. Create an empty database for the Application
6. Change the .env file
```js
In the .env file fill in the DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, and DB_PASSWORD options to match the credentials of the database you just created. This will allow us to run migrations and seed the database in the next step.
```
7. Migrate the database
```php
    php artisan migrate
```
8. Seed the database
```php
    php artisan db:seed
```

## Frontend Installations
Inside the **front-end** directory, open the terminal.
```bash
    npm install
```
Start your development server
```bash
    npm run dev
```

## Important Messages
```
Apologies for the delayed submission of this test, as I encountered difficulties during the data integration process in Nuxt.JS, which I am using for the first time. I sincerely apologize for not being able to complete this test successfully. However, I have completed the Back End and Front End slicing processes. Thank you for the opportunity to participate in the recruitment process with REDComm.
```
