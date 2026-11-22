# Mongoose Express CRUD API

A RESTful CRUD API built using **Node.js, Express.js, MongoDB, and Mongoose**. This project demonstrates how to create, retrieve, update, and delete movie records using REST API endpoints.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Nodemon
- Vercel

## Features

- Create a new movie
- Retrieve all movies
- Retrieve a movie by ID
- Update movie details
- Delete a movie
- MongoDB Atlas database connectivity
- RESTful API architecture
- Environment variable configuration

## Project Structure

```text
Mongoose-Express-app/
│
├── config/
│   └── db.js
│
├── models/
│   └── Movie.js
│
├── routes/
│   └── movieRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/divyasushma-cse/Mongoose-Express-app.git
```

### 2. Navigate to the project directory

```bash
cd Mongoose-Express-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

### 5. Start the development server

```bash
npm run dev
```

The server will run at:

```text
http://localhost:5000
```

## API Endpoints

**Base URL:** `http://localhost:5000`

| HTTP Method | Endpoint | Description |
|---|---|---|
| POST | `/api/movies` | Create a new movie |
| GET | `/api/movies` | Retrieve all movies |
| GET | `/api/movies/:id` | Retrieve a movie by ID |
| PUT | `/api/movies/:id` | Update movie details |
| DELETE | `/api/movies/:id` | Delete a movie |

## Sample API Request

### Create a Movie

**Method:** POST

**Endpoint:** `/api/movies`

**Request Body:**

```json
{
  "title": "Inception",
  "category": "Sci-Fi",
  "year": 2010
}
```

## API Testing

The API endpoints can be tested using:

- Thunder Client
- Postman

Test all CRUD operations by sending the appropriate HTTP requests.

## Deployment

This project is configured for deployment using **Vercel**, with MongoDB Atlas as the database.

### Deployment Steps

1. Push the project to GitHub.
2. Import the GitHub repository into Vercel.
3. Select Express as the application preset.
4. Configure the `MONGO_URI` environment variable in Vercel.
5. Deploy the application.


## Author

**Divya Sushma Sri Appikatla**

- GitHub: [@divyasushma-cse](https://github.com/divyasushma-cse)
- Repository: [Mongoose-Express-app](https://github.com/divyasushma-cse/Mongoose-Express-app)

---

If you find this project useful, feel free to explore the repository!