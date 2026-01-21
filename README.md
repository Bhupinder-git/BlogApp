# Blog Application API

A RESTful API backend for a blog application built with Node.js, Express, and MongoDB. This application provides full CRUD operations for blog posts along with interactive features like comments and likes.

## 🚀 Features

- **Post Management**
  - Create new blog posts
  - Retrieve all posts or a single post
  - Delete posts (with cascade delete for associated likes and comments)
- **Like System**
  - Like posts
  - Unlike posts
- **Comment System**
  - Add comments to posts

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or Atlas account)
- npm or yarn package manager

## ⚙️ Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd BlogApp
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

4. Start the MongoDB server (if using local MongoDB)

## 🚦 Running the Application

### Development Mode (with auto-restart)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start at `http://127.0.0.1:4000`

## 📡 API Endpoints

### Posts

| Method | Endpoint               | Description             |
| ------ | ---------------------- | ----------------------- |
| POST   | `/api/v1/posts/create` | Create a new post       |
| GET    | `/api/v1/posts`        | Get all posts           |
| GET    | `/api/v1/posts/:id`    | Get a single post by ID |
| DELETE | `/api/v1/posts/:id`    | Delete a post by ID     |

### Likes

| Method | Endpoint               | Description   |
| ------ | ---------------------- | ------------- |
| POST   | `/api/v1/likes/like`   | Like a post   |
| POST   | `/api/v1/likes/unlike` | Unlike a post |

### Comments

| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| POST   | `/api/v1/comment` | Add a comment to a post |

## 📝 API Request Examples

### Create a Post

```json
POST /api/v1/posts/create
Content-Type: application/json

{
  "title": "My First Blog Post",
  "body": "This is the content of my blog post..."
}
```

### Like a Post

```json
POST /api/v1/likes/like
Content-Type: application/json

{
  "post": "post_id_here",
  "user": "user_name_here"
}
```

### Add a Comment

```json
POST /api/v1/comment
Content-Type: application/json

{
  "post": "post_id_here",
  "user": "user_name_here",
  "body": "This is a comment..."
}
```

## 📁 Project Structure

```
BlogApp/
├── config/
│   └── database.js          # Database configuration
├── controllers/
│   ├── postController.js    # Post CRUD operations
│   ├── likeController.js    # Like/Unlike operations
│   └── commentController.js # Comment operations
├── models/
│   ├── postModel.js         # Post schema
│   ├── likeModel.js         # Like schema
│   └── commentModel.js      # Comment schema
├── routes/
│   └── routes.js            # API route definitions
├── server.js                # Application entry point
├── package.json             # Dependencies and scripts
└── .env                     # Environment variables
```

## 🔧 Key Features Implemented

### Cascade Delete

When a post is deleted, all associated likes and comments are automatically removed using Mongoose middleware (`pre` hook).

### Modular Architecture

- **Controllers**: Handle business logic
- **Models**: Define data schemas and relationships
- **Routes**: Define API endpoints
- **Config**: Manage database connections

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Your Name

## 🐛 Known Issues

- Authentication and authorization not yet implemented
- Input validation needs enhancement
- Error handling can be improved

## 🔮 Future Enhancements

- [ ] Add user authentication (JWT)
- [ ] Implement authorization middleware
- [ ] Add input validation (express-validator)
- [ ] Implement pagination for posts
- [ ] Add search functionality
- [ ] Include image upload for posts
- [ ] Add unit and integration tests
- [ ] Implement rate limiting
- [ ] Add API documentation (Swagger/OpenAPI)

---

⭐ If you found this project helpful, please give it a star!
