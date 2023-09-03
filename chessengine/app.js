const express = require("express");
const app = express();
const cors = require("cors");
const { exec } = require("child_process");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(`${__dirname}/public`));
  }
app.post('/chessengine', async (req, res) => {
    const { command } = req.body;

    // Validate and sanitize the command (for security)
    if (!command || typeof command !== 'string') {
        return res.status(400).json({ error: 'Invalid command' });
    }

    // Execute the command
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return res.status(500).json({ error: 'Command execution failed' });
        }

        console.log(`Command output: ${stdout}`);
        res.json({
            response: 'Command executed successfully',
            output: stdout
        });
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running on port 8000");
});
