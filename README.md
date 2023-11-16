[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# E-commerce-Database

## Description
"E-commerce-Database" is a back-end application for e-commerce sites, focusing on the electronics industry. Built using Express.js, Sequelize, and MySQL, it caters to internet retail businesses by enabling efficient online transactions. This application demonstrates the fundamental architecture of e-commerce platforms, integrating the latest technologies in database management and server-side development.

## Installation
Follow these steps to install and set up the project:

1. **Clone the Repository:**
2. **Install Dependencies:**
3. **Database Setup:**
- Use the `schema.sql` file in the `db` folder to create your MySQL database.
4. **Environment Variables:**
- Create a `.env` file in the root directory.
- Add the following lines, replacing values with your MySQL credentials:
  ```
  DB_NAME=''
  DB_USER=''
  DB_PW=''
  DB_HOST=''
  ```

## Usage
To run the application:

1. **Seed the Database:**
2. **Start the Server:**
3. **API Testing:**
- Use API testing tools like Insomnia Core to test the RESTful CRUD operations.

## Features
- RESTful API with CRUD operations for managing categories, products, and tags.
- Express.js for server-side routing.
- Sequelize ORM for MySQL database management.
- Data seeding for initial database setup.

## API Routes
- **Categories:**
- `GET /api/categories`
- `GET /api/categories/:id`
- `POST /api/categories`
- `PUT /api/categories/:id`
- `DELETE /api/categories/:id`
- **Products:**
- Similar routes for products.
- **Tags:**
- Similar routes for tags.


## Contributing
Contributions to "E-commerce-Database" are welcome. Please ensure that your code adheres to the project's standards and update tests as appropriate.

## License
This project is licensed under the [MIT License]

## Acknowledgments
- Contributors and maintainers of Express.js, Sequelize, and MySQL.
