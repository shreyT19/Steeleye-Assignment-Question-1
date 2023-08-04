# README - App Issue Fixes and Enhancements

Welcome to the repository for the App Issue Fixes and Enhancements! This project focuses on resolving specific issues and adding enhancements to an existing application. We appreciate your interest and involvement in contributing to this project.

## Instructions

To get started, follow these steps:

1. Clone this repository to your local machine.
2. Make sure you are checked out to the `master` branch.
3. Run the command `npm install` to install the necessary dependencies.
4. Start the application using the command `npm start`.

## Issue Fixes and Enhancements

In this section, we outline the specific issues that have been addressed and the enhancements that have been added to the application.

### 1. Total Number of Orders Display

Issue: The title of the header incorrectly displays "5 orders" instead of the actual total number of orders present in the table.
Fix: The header title now accurately displays the total number of orders.

### 2. Order Submitted Date Integration

Issue: The order submitted dates are missing from the table.
Fix: The order submitted dates have been integrated into the table using timestamp data from `src\assets\timeStamps.json`, ensuring accurate display of order submission information.

### 3. Dynamic Currency Display

Issue: The Order Volume cell displays USD values regardless of the selected currency in the header dropdown.
Fix: The Order Volume cell now dynamically displays the currency value selected in the header dropdown.

### 4. Search Feature for Order IDs

Enhancement: A search feature has been added to enable users to search for specific orders using the order IDs in the header search bar.

### 5. Console Errors and Warnings

Issue: Console errors and warnings were present in the application.
Fix: Console errors and warnings have been resolved, leading to a smoother and error-free user experience.

### 6. Order Details Card

Enhancement: When a user selects an order from the table, a detailed Order Details Card is now populated above the listing component, providing an enhanced user experience.

### 7. Storybook Integration

Enhancement: Storybook has been integrated into one of the components i.e the <b> List Component </b>, allowing for isolated development and testing of UI components. To run Storybook, use the command `npm run storybook`.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need assistance, feel free to contact us at shreyanshtripathy49@gmail.com.
