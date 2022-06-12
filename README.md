


**The technologies used 🛠:**

 `React`
 `React router dom`
 `Tailwind`
 `React-player`
 `Formik`
 `Axios`
 `Font Awasome`


----- **The features it has are:** -----
-	Access
-	Check in
-	Recover password
-   The ability to log in without an account

----- **The functionalities that you have within the account are:** -----
- Being able to add movies to "My list"
- Create a profile like Netflix has
- Being able to add, edit the photo and name of your profile
- In your account you can change the email, and the password




## Project WebSite: https://netflix-clone-ta.netlify.app

## Installation

Install my-project with npm

```bash
    npm install
```
    
## Usage

To deploy this project run

```bash
  npm run dev
```

## Possible bugs 🚫

The movie carousel is made with react and css. It has a logic that when the user clicks on the arrow it has a number of clicks depending on the size of the screen so that it cannot scroll infinitely. But by clicking too many times and fast this can cause errors in the carousel and the movies will not be displayed correctly and the web must be reloaded to be displayed correctly again. I leave you a small gif with the example. It's nothing serious, but it's something I need to fix.

![App Screenshot](https://res.cloudinary.com/dkxm9njd6/image/upload/v1655065984/bug-gif_cgcgbx.gif)
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.


`VITE_BACKEND_URL`

`VITE_URL_FRONT`


`VITE_PASSWORD` (Is the password to be able to log in without registering)



## Screenshots

![App Screenshot](https://res.cloudinary.com/dkxm9njd6/image/upload/v1655065986/login_register-gif_vnh2uv.gif)

#

![App Screenshot](https://res.cloudinary.com/dkxm9njd6/image/upload/v1655065985/cambiar_email_pass-gif_pjbgxl.gif)

#

![App Screenshot](https://res.cloudinary.com/dkxm9njd6/image/upload/v1655065985/telefono-gif_dsuhfs.gif)


## Possible fixes and improvements 🔧💡:

- Improve the carousel so that it is tactile on mobile devices, for this we must take into account that the user cannot scroll infinitely.
- Add description to movies.
- Functionality can be added when choosing an account, such as premium, basic or standard and this is reflected in each user's profile.
- Add registration with Google for faster login.
- Refactor the css code, which is perhaps the most complicated to read.
- Add search functionality to each page since for now only the main page has it.
- Change the entire site to the English language.
