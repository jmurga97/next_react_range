# Know Your Code Skills - Exercise 🚀

This project is a React application built with Next.js that implements one component `<Range />` with two different behaviors: Normal/Continous Range or Fixed Range

## Setup

Clone this repository

Install the dependencies

```bash
npm install
```

Execute the development server

```bash
# Probar en modo desarrollo
npm run dev
```

Access the web app with: [http://localhost:8080](http://localhost:8080).

## Exercise 1 - Normal Range

### Description
The `<Range />` component provides a input range with customizable min and max values. Users can drag two bullets along the range line to select a range. Additionally, users can click on the currency number label values (min or max) to set a new value. The range is restricted between the min and max input values.

### Features
- Custom range input component
- Dragabble bullets for selecting range
- Clickable currency number labels for setting new values
- Range constraints between min and max values
- Hover effects, use of Pointer Events and cursor changes for better user experience
- Mocked HTTP service with HTTP Next.js API Routes

### Usage
Access the component at `localhost:8080/exercise1`.

## Exercise 2 - Fixed Values Range

### Description
The `<Range />` component provides a range input with a array of fixed values. Similar to Exercise 1, users can drag two bullets along the range line to select a range. However, in this case, currency values are not input changeable and are only displayed as labels.

### Features
- Custom range input component
- Dragabble bullets for selecting range
- Fixed range of bullet values
- Range constraints between min and max values
- Mocked HTTP service with HTTP Next.js API Routes

### Usage
Access the component at `localhost:8080/exercise2`.

## Testing
The project includes unit tests for Range component and utils folder
```bash
npm run test
```
