# Mini Message Board

Mini Message Board is a simple project aimed at practicing **Express.js** and **EJS templating**. It allows users to view, add, and interact with messages dynamically.

## Features

- Displays a list of messages.
- View individual messages by their ID.
- Submit new messages via a form.
- Uses **Express.js** for routing and **EJS** for rendering templates.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mini-message-board.git
   cd mini-message-board
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and specify the **PORT** (optional):
   ```env
   PORT=4444
   ```

4. Start the server:
   ```sh
   npm start
   ```

5. Open your browser and go to:
   ```
   http://localhost:4444
   ```

## Project Structure

```
mini-message-board/
│── views/             # EJS templates
│── app.js             # Main server file
│── package.json       # Project metadata and dependencies
│── .env               # Environment variables (optional)
```

## Dependencies

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler)

## License

This project is licensed under the [MIT License](LICENSE).

---
Happy coding! 🚀