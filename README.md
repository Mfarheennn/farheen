#  Interactive Dynamic Greeting Dashboard

An interactive, responsive single-page web application built inside a **WSL (Windows Subsystem for Linux)** development environment. This application dynamically manipulates the DOM using raw JavaScript to capture real-time user input and cycle asynchronous interface color palettes.

##  Tech Stack & Architecture
* **Frontend Structure:** HTML5 Semantic Markup
* **Interface Styling:** CSS3 utilizing declarative transition keyframes for fluid background color changes.
* **Logic Engine:** Vanilla JavaScript (ES6+) for explicit DOM manipulation and conditional input validation.
* **Environment:** WSL (Ubuntu) integrated with VS Code.
* **Version Control:** Git via integrated bash terminal distributed to GitHub.

##  Local Installation & Deployment
To run this project locally within your Windows/WSL environment:

1. Clone the repository down into your WSL workspace directory:
   ```bash
   git clone https://github.com/Mfarheennn/farheen.git
   ```
2. Navigate directly into the project directory root:
   ```bash
   cd farheen
   ```
3. Initialize the application instantly in your default web browser using the native Windows interoperability pipe:
   ```bash
   explorer.exe index.html
   ```

##  Core JavaScript Logic Explained
The app leverages a localized state pointer (`colorIndex`) running against a modular arithmetic operator (`%`) to cycle infinitely through an array of Hex color strings without ever overflowing or throwing an out-of-bounds error:
```javascript
colorIndex = (colorIndex + 1) % colors.length;
```

