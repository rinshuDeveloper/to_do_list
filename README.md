# 📝 Todo List Web App

A simple and interactive Todo List web application built using HTML, CSS, and JavaScript. This app allows users to add, delete, and mark tasks as completed, with data persistence using localStorage.

## 🚀 Features

* Add new tasks
* Delete tasks
* Mark tasks as completed (strike-through)
* Persistent storage using localStorage
* Clean and user-friendly UI
* Event delegation for efficient handling

## 🛠️ Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript

## 📂 Project Structure

```id="todo123"
├── index.html
├── style.css
├── script.js
```

## ⚙️ How It Works

* User enters a task and clicks **Add**
* Task is added to the list dynamically
* Clicking on a task toggles completion (strike-through)
* Clicking **Delete** removes the task
* All tasks are stored in **localStorage**
* Tasks are automatically loaded when the page reloads

## 💾 Data Storage

Tasks are stored in the browser using localStorage in this format:

```id="jsonex"
[
  { "text": "Learn JavaScript", "completed": false },
  { "text": "Build a project", "completed": true }
]
```

## ▶️ How to Run

1. Clone the repository:

   ```
   git clone https://github.com/your-username/todo-app.git
   ```

2. Open the project folder

3. Run `index.html` in your browser

## 📸 Preview

<img width="725" height="602" alt="todo_screenshot" src="https://github.com/user-attachments/assets/1253f63a-a817-4b16-9376-d7b65121e71c" />


## ⚠️ Limitations

* No edit task feature
* No filtering (completed / pending)
* No backend (data stored only in browser)

## 🔮 Future Improvements

* Add edit task functionality
* Add filters (All / Completed / Pending)
* Add due dates
* Improve mobile responsiveness
* Add dark mode

## 🎯 Learning Outcomes

This project helps in understanding:

* DOM manipulation
* Event delegation
* LocalStorage usage
* Dynamic UI updates

## ⚠️ Disclaimer

This project is created for learning purposes only.

## 👨‍💻 Author

Rinshu Developer
GitHub: https://github.com/rinshuDeveloper

---

⭐ If you like this project, consider giving it a star!
