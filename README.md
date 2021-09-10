# Employeemanagerapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The front end of the application consists of the entire web-based user interface.
When the app launches, the home page will be displayed. 

**Home Page**
Here a list of all blogs on the website is displayed. Clicking on the title of any blog will bring navigate the browser to the **Blog Page** associated with that particular blog, where it's content can be viewed. 

**Header** 
The header consists of several links, **User Home, Create a Post, Search** and **Home**
- User Home will navigate to the **User Home** page
- Create a Post will navigate to the **Create Blog** page
- Search will navigate to the **Search** page
- **Home** will navigate to the site landing page, **Home Page**

**Footer**
The footer consists of three links, **About Us, Contact Us** and **Login/Logout**

**Login Page**
From the login page, a registered user may enter their correct username and password to be logged into the site. Upon successful login, a user is brought to the **User Home** page. New users may click the link below the login section's submit button to create a new account. 

**Create Account Page**
From this page, users may create a new user account, with a password that must consits of at least 8 characters, including 1 special character and one upppercase character. They must also provide an email address. Successful account creation navigates the user to the **Login Page**

**User Home**
This page will display the username of the currently logged in user, their user profile image and a list of all blogs posted on the site by this user. Clicking on one of the blog titles will navigate the user to the **Blog Page** associated with that blog. Clicking on the user's profile image will display a form that will allow them to provide a link to an image they would like to set as their profile image. Clicking the 'X' on the form will cancel this operation. Clicking submit will use the link provided to reset their profile image. 
Each blog also has a delete button, which will permanently remove that blog from the site, and an edit button, which will allow them to edit the content, title, image, tags and recipe associated with that particular blog. 

**Blog Page**
The Blog Page will display the contents of a specific blog, including the body, recipe and tags associated with that blog, as well as a single image if one is associated with that blog.

**Create Blog**
This page will allow users to create a Blog Post. A Title and Content are required. Recipe, tags and an image are optional. Upon clicking submit, the blog is added to the database and associated with the currently logged in user, if there is one. 

**Edit Blog**
This page has functionality that mirrors the **Create Blog** page, however the contents of the form are preloaded with the associated blog being edited, and clicking submit will update the existing blog instead of creating a new one. 

**Search**
This page allows users to search the entire database for blogs either by Tag or by Title. Checking the checkbox will search by Tag, deselecting it will allow searching by Blog Title

**Contact Us**
This page navigates to a form that allows users, either logged in or not to contact the proprietors of the website with feedback. Clicking submit on the feedback will navigate to the **Thank You Page**

**Thank You Page**
This page provides a breif communication with the reader, thanking them for contacting the website. Clicking the back button will return the user to the page they were viewing before they clicked on the 'Contact Us' link. 

**About Us Page**
Displays a short description of the website and it's proprietors. Clicking the back button will return to whatever page was being viewed before navigating to this one. 
