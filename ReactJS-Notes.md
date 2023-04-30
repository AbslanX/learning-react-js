#ReactJS  

##Lesson 1 : What Are Components? And Why Is React All About Them?

Reach is a JavaScript library for **building user interfaces**.

HTML, CSS & JavaScript are about building user interfaces, as well.  We use React because it simplifies building complex, interactive and reactive user interfaces.  

This simplification is in part to the fact that React is all about **components**.  Components are the building blocks of React applications.  All user interfaces are made up of components.  In this lesson, we'll learn about what components are and why they are so important to React.

What is a component?

A component is a small, reusable chunk of code that is responsible for one job.  That job is often to render some HTML.  The component is responsible for both the structure and the appearance of that HTML.  A component can also be responsible for listening to user events, like a click or a hover, and modifying the HTML in response.  A component can also keep track of data that changes, and modify the HTML in response to that data.

Why components?

Reusability and separation of concerns.  Reusability means that we can use the same component over and over again throughout our application.  Separation of concerns means that we can separate our application into small chunks, each of which is responsible for one job.  This makes our code easier to understand and maintain.

##Lesson 2 : React Code Is Written in A "Declaritive Way"

How Is A Component Built?

We combine HTML, CSS, and JS into a component and then we use that component in our application.  We can use the same component over and over again throughout our application.  This is reusability.  A combination of all components creartes a user interface.

React allows you to create re-usable and reactive components consisting of HTML and JS (and CSS).

This is done in a Declarative Approach.  This means that we write code that describes what we want to happen, and React takes care of the DOM manipulation for us.  We don't have to worry about how the DOM is updated.  We just have to worry about what we want to happen.  We define the desired target state(s) and let React figure out the actual JavaScript DOM instructions.

##Lesson 3 : Creating A React Project

###Create React App

To use the create-react-app tool, we need first need to install Node.js.  Node.js is a JavaScript runtime environment.  It allows us to run JavaScript outside of the browser.  

```npx create-react-app my-app``` , where my-app is the desired name of the project.  This will create a new folder called my-app, and it will install all of the dependencies that we need to get started.  It will also set up a development server for us, so that we can see our application in the browser as we build it.  It will also set up a build process for us, so that we can deploy our application to a production server.  It will also set up a test runner for us, so that we can write tests for our application.

###Run the Development Server  

CD into the project directory and run 

```npm start```  

This will start the dev server which hosts a preview of the react app and will automatically open up localhost:3000 in your browser.

##Lesson 4 : Building a Custom React Component

-- check notes in ExpenseItem.js, App.js