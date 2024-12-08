# react
 
A web application based on React typescript 5.6 and Node.js 20.18.
 
This project was generated with Node.js 20.18 and NPM 10.8.2.
 
[[_TOC_]]
 
---

## Project - Overview

Project Overview:

The project is a dynamic and responsive React-based web application that seamlessly integrates frontend and backend functionalities to deliver a smooth user experience. The core of the application revolves around Redux-Saga, which efficiently manages asynchronous API calls, ensuring a smooth flow of data between the frontend and backend.

Key Features:
Efficient Data Management with Redux-Saga:
The app employs Redux-Saga to manage API calls, enabling smooth, centralized handling of asynchronous data fetching. This ensures that state transitions and side effects (like fetching products) are handled gracefully, improving the maintainability and scalability of the application.

Product Grid Display:
Upon successful data fetching, products from the backend are displayed in an aesthetically pleasing grid layout. This provides users with an easy-to-navigate view of available products, enhancing the shopping experience.

Product Details Component:
Another component allows users to view detailed information about individual products. This functionality helps users make more informed purchasing decisions by displaying key attributes, descriptions, and other essential details.

Responsive Styling with Bootstrap and CSS:
The application uses a combination of CSS and Bootstrap for styling, ensuring a responsive and clean user interface across various devices and screen sizes. This ensures an optimal viewing experience for all users, regardless of their device.

React Router for Seamless Navigation:
Routing is handled efficiently with React Router, allowing users to navigate between the product listing and product details pages with ease. This provides a smooth user experience as users explore products or view detailed descriptions without unnecessary page reloads.

Backend and External Integration for Product Fetching:
On application startup, the frontend attempts to fetch product data from the backend. If no records are available, the backend triggers an API call to an external server to load the products. Once products are fetched, they are stored in the backend, ready to be pulled by the frontend for display.

Centralized Redux State Management:
Redux is used as the central state management tool for the application, ensuring that product data and filtering options are consistently available across the entire app. This enhances performance, maintainability, and scalability.

Product Filtering Options:
Users have the ability to filter products based on categories and sort them by price in either ascending or descending order. This empowers users to quickly find products that meet their preferences, making the app more user-friendly and efficient.


This project goes beyond simple product listing applications by combining the power of Redux-Saga, backend integration, and a sleek user interface to deliver an intuitive and responsive shopping experience. By intelligently managing API calls, ensuring data consistency with Redux, and offering dynamic filtering options, the application stands as an exemplary solution for handling complex product data in modern web applications.

 
## How to run this project
 
### Software requirements
 
List of tools to be installed:
 
- Node.js 20.18 (it contains NPM 10.8.2)
 
### How to start developing
 
Clone the repo, and open it in your IDE.
 
#### Install the dependencies
 
Run `npm install` to download and install all NPM dependencies on your machine. This will create a `node_modules/` directory.
 
### How to run locally
 
#### Development server
 
Run `npm run dev` for a dev server. This will open your browser on `http://localhost:5173/`. The app will automatically reload if you change any of the source files.

 
#### Build
 
Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory.
 
#### Test
 
Run `npm jest` to execute the unit tests 

Run `npx jest --coverage` to know the coverage

## Further help
 
To get more about React go check out the [official documentation](https://reactjs.org/).
 
