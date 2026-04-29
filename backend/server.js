const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(express.json());

// In-Memory Database (No MongoDB required for now)
const jobs = [
    { title: "Telecalling Executive", category: "Communication", type: "Work from Home", description: "Make calls for feedback and customer support. No targets." },
    { title: "Data Entry Operator", category: "Computer Basics", type: "Flexible Hours", description: "Simple digitisation of physical records." },
    { title: "Guest Teacher / Tutor", category: "Teaching", type: "Part-Time Office", description: "Teach primary students or conduct doubt-clearing sessions." },
    { title: "Community Manager", category: "Management", type: "Work from Home", description: "Manage online community groups and moderate discussions." }
];

app.get('/api/jobs', (req, res) => {
    res.json(jobs);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ MVP Server is LIVE on port ${PORT}`);
});