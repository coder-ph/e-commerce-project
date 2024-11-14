# E-Commerce React App
Welcome to the E-Commerce React App repository! This project is an e-commerce platform built with React, featuring a sleek and user-friendly interface, product catalog, shopping cart functionality, and other essential features for a seamless shopping experience.

# About the Project
This e-commerce application is designed to showcase a range of products in a visually appealing grid format. It offers functionality for users to browse products, view details, add items to their shopping cart, and toggle between light and dark themes for a customized shopping experience.

The main goal of this project is to provide a hands-on example of building an interactive and dynamic e-commerce website with React, including features like React Router for navigation, state management, and API integration for fetching product data.

# Features
- Product Catalog: Displays a list of products in a 3-column grid layout.
- Product Details: Users can view detailed information for each product.
- Shopping Cart: Add products to the cart, update quantities, and remove items.
- Filter and Search: Allows filtering and searching products by category and name.
- Responsive Design: Fully responsive layout for mobile and desktop users.

# Tech Stack
- React: Frontend library for building user interfaces.
- React Router: For navigating between different pages.
- JavaScript (ES6): Core language for building dynamic features.
- CSS/Bootstrap: For styling and layout.
- JSON Server : Simulates a backend to fetch product data.

# Installation
To get a local copy up and running, follow these steps.

### 1. Clone the repository:
`git clone https://github.com/your-username/e-commerce-project.git`

### 2. Navigate to the project directory:
`cd e-commerce-project`

### 3. Install dependencies
`npm install`

### 4. Start the development server
`npm start`

### 5. Start JSON Server
`json-server --watch db.json` 
- This will start a RESTful API on `http://localhost`

# Usage

After completing the installation steps, you can:

- pen the app in the browser by navigating to http://localhost:3000.
- Browse through the products in a 3-column grid layout.
- Click on any product to view detailed information.
- Add items to the shopping cart and adjust quantities.

# File Structure

`e-commerce-react-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/           # Images, icons, and static assets
│   ├── components/       # Reusable components (e.g., ProductCard, CartItem)
│   ├── pages/            # Pages for routing (e.g., Home, ProductDetails)
│   ├── data/             # Static or JSON data (if not using JSON server)
│   ├── App.js            # Main app component
│   ├── index.js          # App entry point
│   ├── App.css           # Global styles
│   └── ...
└── README.md

`