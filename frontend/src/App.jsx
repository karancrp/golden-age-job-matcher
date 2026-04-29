import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
    const [jobs, setJobs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const API_URL = 'https://golden-age-job-matcher.onrender.com/api/jobs';

    useEffect(() => {
        axios.get(API_URL)
            .then(res => setJobs(res.data))
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    const filteredJobs = selectedCategory
        ? jobs.filter(job => job.category === selectedCategory)
        : jobs;

    return (
        <div className="container">
            <header>
                <h1>🤝 Golden-Age Job Matcher</h1>
                <p>Empowering Senior Citizens with flexible, meaningful work.</p>
            </header>

            <div className="filters">
                <label><strong>Filter by Skill: </strong></label>
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Communication">Communication</option>
                    <option value="Computer Basics">Computer Basics</option>
                    <option value="Teaching">Teaching</option>
                    <option value="Management">Management</option>
                </select>
            </div>

            <div className="job-list">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <div key={index} className="job-card">
                            <h3>{job.title}</h3>
                            <p><strong>Type:</strong> {job.type}</p>
                            <p>{job.description}</p>
                            <button className="apply-btn">Apply Now</button>
                        </div>
                    ))
                ) : (
                    <p>No jobs found for this category.</p>
                )}
            </div>
        </div>
    );
}

export default App;
