# Gadget Heaven

**Live Website Link:** [https://phenomenal-horse-6de9c7.netlify.app/](https://phenomenal-horse-6de9c7.netlify.app/)

**Requirement Document Link:** [Assignment Requirements](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf?fbclid=IwY2xjawGYSeFleHRuA2FlbQIxMAABHRg4A5ld7_xdj6IG6qeaGY_75iF4q-7QgmaaBg1hJ_amhC4wJxunkr0j2g_aem_CIVlrKb-5zei11Io-SHTlw)

---

## React Fundamental Concepts Used

1. **Components**: The project is broken down into reusable components to manage different parts of the UI, such as the header, product list, cart, and product details.
2. **Props**: Data is passed between components using props to keep them modular and functional.
3. **State Management**: `useState` is used to manage local component states, like cart items and product details.
4. **Effect Hook (`useEffect`)**: Used for fetching data from APIs when the component mounts.
5. **Routing**: `react-router-dom` is used to manage different routes, such as product details, cart, and about us pages.

## Data Handling and Management

- **Context API**: Used to provide global state management across components for the cart and product information, ensuring smooth data flow without prop drilling.
- **Local Storage**: Cart data is stored in local storage to persist the items even when the page is refreshed.

## Features of Gadget Heaven

1. **Product Listing and Details**: Displays a list of gadgets with options to view detailed information for each product.
2. **Cart Functionality**: Users can add items to the cart, view total cost, and remove items as needed.
3. **Responsive Design**: The website is fully responsive, ensuring a smooth experience on mobile, tablet, and desktop devices.
4. **Sorting Options**: Users can sort products by price to easily find gadgets within their budget.
5. **Purchase Button**: A mock purchase button allows users to simulate the checkout process.

---

This documentation provides an overview of the `Gadget Heaven` project and highlights the key concepts, data management techniques, and features implemented in the application.
