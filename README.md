# Product App

## Overview

The Product App is an Angular-based application that displays a list of products. Users can select a size for each product and add items to their cart. Upon adding an item to the cart, a confirmation message is displayed.

## Features

- Dynamic product listing with images and prices
- Size selection for each product
- Stock management with "Out of Stock" notifications
- Add items to cart with confirmation messages

## Technologies Used

- Angular
- typescript
- Bootstrap 4
- HTML/CSS

## Installation

1. **Clone the Repository**

   ```bash
   git clone
   https://github.com/Raghu707/product_app_v3.git
   

   Navigate to the Project Directory

   cd product-app

   Install Dependencies
   npm install

# Product App Overview

The Product App is an Angular-based web application designed to showcase a list of products, allowing users to select sizes and add items to their shopping cart. This document provides a brief overview of how the application works.

## Key Features

1. **Product Display**: The app displays a grid of product cards, each containing an image, name, price, and available stock. If a product is out of stock, it is clearly labeled.

2. **Size Selection**: Each product has a dropdown menu that allows users to select a size from available variants. This ensures that users can choose the correct size before adding the item to their cart.

3. **Cart Functionality**: Users can click the "Add to Cart" button to add the selected item to their shopping cart. If the user attempts to add a product without selecting a size or if the product is out of stock, a warning message will be displayed.

4. **Confirmation Messages**: Upon successfully adding an item to the cart, a confirmation message appears below the button, notifying the user that the item has been added.

## How It Works

### Component Structure

The application is structured around a main component (`app.component.ts`) that manages the product data and user interactions. The key parts of the component include:

- **Product Data**: A list of products is defined as an array of objects, each containing attributes such as `id`, `name`, `price`, `stock`, `imageUrl`, and `variants`. This data can be easily modified or expanded.

- **State Management**: The component maintains state variables to track selected sizes, stock warnings, and cart messages. These variables ensure that the UI updates accordingly based on user interactions.

### User Interaction Flow

1. **Selecting a Size**: When a user selects a size from the dropdown menu, the `selectedSize` object is updated to reflect the chosen size for that specific product.

2. **Adding to Cart**: When the "Add to Cart" button is clicked, the `addToCart` method is triggered:
   - The method first checks if a size has been selected. If not, it sets a warning message to prompt the user to select a size.
   - If a size is selected and the product is in stock, the stock count is decremented, and a confirmation message is generated, indicating that the item has been added to the cart.

3. **Displaying Feedback**: After adding an item to the cart, the confirmation message is displayed below the button, providing immediate feedback to the user.

### Conclusion

The Product App combines Angular's powerful features with a user-friendly interface to create an engaging shopping experience. Its modular design allows for easy updates and enhancements, making it a solid foundation for further development in e-commerce applications. Users can seamlessly browse, select, and add products to their cart while receiving real-time feedback on their actions.
   Run the Application

Start the Angular development server:
ng serve -o


