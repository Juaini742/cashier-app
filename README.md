# Cashier Application

Cashier Application is a web application built using Next.js 14, ORM Prisma, and MySQL database.

## Features

- **Menu Selection**: Users can select items from the provided menu.
- **Checkout**: Users can proceed to checkout for selected items.
- **Purchase History**: Users can view the history of purchased items.
- **Invoice Generation**: Invoices for purchases can be downloaded in PDF format.
- **Product Catalog**: Users can view the list of available products.
- **Add New Product**: Admins can add new products to the catalog.

## Technologies Used

- **Next.js 14**: A React framework for building server-side rendered (SSR) web applications.
- **Prisma ORM**: Modern database toolkit for TypeScript and Node.js.
- **MySQL**: Open-source relational database management system.

## Dependencies

- @prisma/client
- @react-pdf/renderer
- axios
- multer
- next
- react
- react-dom
- react-hook-form
- react-icons
- react-query
- uuid

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Juaini742/cashier-app.git
   ```

2. Install dependencies:

   ```
   cd cashier-app
   npm install
   ```

3. Set up the database:

   - Create a MySQL database.
   - Update the database connection configuration in `.env.example` file.

4. Run migrations:

   ```
   npm run migrate
   ```

5. Start the application:
   ```
   npm run dev
   ```

## Usage

- Navigate to the application URL in your web browser.
- Select items from the menu and proceed to checkout.
- View purchase history, download invoices, manage products, and more.

## Folder Structure

- `prisma/seed.mjs`: seeder file for prisma
- `prisma/schema.prisma `: prisma model file
- `prisma/migrations `: migrations file prisma
- `src/app/api/ `: all route file
- `src/app/components/db `: content of app
- `src/app/components/atoms `: all reusable component
- `src/app/components/molecules `: all file
- `src/app/components/template `: template files
- `src/app/constants `: all type of the items
- `src/app/context `: useContext file
- `src/app/history `:history page
- `src/app/pdf `: template of pdf file
- `src/app/status `: status page
- `src/app/table `: table page
- `src/app/utils `: function fetching api
- `src/app/global.css `: css style
- `src/app/layout `: layout file
- `src/app/page `: home page

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries, please contact [juaini742@gmail.com](mailto:juaini742@gmail.com).
