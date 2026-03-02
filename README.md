🚦 Priority Intelligence Dashboard v3.0
An advanced Task Registry built with a Node.js and Express backend. This system uses a custom sorting algorithm to intelligently organize tasks based on priority, dates, and precise 24-hour time notation.

🧠 Core Intelligence
Multi-Tiered Sorting: The system automatically prioritizes tasks by Urgency (High/Med/Low), then by Date, and finally by Time.

24-Hour Precision: Unlike basic lists, this registry handles full 24-hour time inputs to ensure morning tasks always appear before evening ones.

Dynamic Search & Filter: Includes a real-time search engine to instantly locate tasks within the registry.

Full CRUD Lifecycle: Users can Create new tasks, Read the sorted list, Update (Edit/Complete) existing entries, and Delete tasks permanently.

🛠️ Development Environment
Server: Node.js with Express.js.

Workflow: Developed using nodemon for real-time server hot-reloading.

Version Control: Managed via Git using Personal Access Token (PAT) authentication.

🚀 How to Run Locally
Clone this repository to your machine.

Install the necessary packages:

Bash
npm install express cors
Launch the server with nodemon:

Bash
nodemon index.js
View: Open http://localhost:3000 in your web browser.
