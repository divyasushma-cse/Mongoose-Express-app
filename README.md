# Mongoose Express CRUD API

A RESTful CRUD API built using **Node.js, Express.js, and MongoDB with Mongoose**. This project demonstrates how to create, retrieve, update, and delete movie records using REST API endpoints.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Nodemon

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

## Features

- Create a new movie
- Get all movies
- Get a movie by ID
- Update movie details
- Delete a movie
- MongoDB database connectivity
- RESTful API structure

## Installation and Setup

**1. Clone the repository**

```bash
git clone https://github.com/divyasushma-cse/Mongoose-Express-app.git
```

**2. Navigate to the project folder**

```bash
cd Mongoose-Express-app
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace the MongoDB URI with your own connection string.

**5. Start the development server**

```bash
npm run dev
```

## API Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/movies` | Create a movie |
| GET | `/api/v1/movies` | Get all movies |
| GET | `/api/v1/movies/:id` | Get a movie by ID |
| PUT | `/api/v1/movies/:id` | Update a movie |
| DELETE | `/api/v1/movies/:id` | Delete a movie |

## Sample Movie Data

```json
{
  "title": "Inception",
  "category": "Sci-Fi",
  "year": 2010
}
```

## Testing

API endpoints can be tested using **Thunder Client** or **Postman**.

## Author

**Divya Sushma Sri Appikatla**

GitHub: [@divyasushma-cse](https://github.com/divyasushma-cse)

---

If you find this project useful, feel free to explore the repository!