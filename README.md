

# 🌟 To-Do List Application 🌟

A simple, yet effective **To-Do List** app to help you stay organized and on top of your tasks. Built with **Node.js**, **Express**, **MongoDB**, and **EJS**, this app allows you to create, manage, and delete tasks in a personalized, interactive manner.

---

## 🚀 Features

- **✨ Add Tasks**: Create new tasks and add them to your To-Do list.
- **🗑️ Delete Tasks**: Easily remove completed tasks with a checkbox.
- **📅 Multiple Lists**: Organize tasks into various lists with custom names.
- **🔒 Persistence**: Tasks are saved in a MongoDB database, ensuring no loss of data.
- **📱 Responsive Design**: Access and manage your tasks on any device with ease.

---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for server-side execution.
- **Express.js**: Web framework for routing and handling HTTP requests.
- **MongoDB**: NoSQL database for storing tasks.
- **EJS**: Embedded JavaScript templating engine for dynamic HTML rendering.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **Body-Parser**: Middleware to parse incoming request bodies for POST requests.

---

## 📋 Setup & Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (with npm)
- **MongoDB** (either local or via MongoDB Atlas)

### Installation Steps

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/todo-list_using_EJS.git
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-list-app
   ```

3. Install project dependencies using npm:
   ```bash
   npm install
   ```

4. Start MongoDB (if using a local instance):
   ```bash
   mongod
   ```

5. Run the application:
   ```bash
   node app.js
   ```

6. Open the app in your browser by navigating to `http://localhost:3000`.

---


## 🌍 Endpoints

- **GET /**: Displays the "Today" To-Do list with tasks for the day.
- **GET /:customListItem**: Displays custom To-Do lists based on the list name (e.g., `/work`).
- **POST /**: Adds new tasks to the "Today" list or a custom list.
- **POST /delete**: Deletes a task when the associated checkbox is checked.
- **GET /about**: Displays the About page with project information.

---

## 📌 Usage

1. **Homepage (`/`)**: View and manage today's tasks.
2. **Add Task**: Type a new task in the input field and click the `+` button.
3. **Delete Task**: Check the checkbox next to any task to delete it.
4. **Custom Lists**: Create custom lists by navigating to `/listName` (e.g., `/work`).

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Clone your fork locally.
3. Create a new branch (`git checkout -b feature-name`).
4. Make changes and commit (`git commit -m "Description of changes"`).
5. Push your changes to your fork (`git push origin feature-name`).
6. Submit a pull request to the original repository.


## 💡 Acknowledgements

Big thanks to the following:

- **Node.js** for providing the backend runtime.
- **Express.js** for making server management a breeze.
- **MongoDB** for flexible data storage.
- **EJS** for simplifying dynamic HTML rendering.
- **Mongoose** for smooth MongoDB integration.

---

### 📝 Enjoy managing your tasks with this simple To-Do List app!
