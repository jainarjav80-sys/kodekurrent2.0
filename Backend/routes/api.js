const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// POST /api/register
router.post('/register', async (req, res) => {
    try {
        const { name, email, phone, college, teamName, branch, year, course, members } = req.body;

        // Basic validation
        if (!name || !email || !phone || !college || !teamName || !branch || !year || !course) {
            return res.status(400).json({ message: 'All main fields are required.' });
        }

        if (members && members.length > 3) {
            return res.status(400).json({ message: 'A team can have a maximum of 4 members in total (1 lead + 3 teammates).' });
        }

        // Check if user already exists
        const existingRegistration = await Registration.findOne({ email });
        if (existingRegistration) {
            return res.status(400).json({ message: 'Email already registered.' });
        }

        // Create new registration
        const newRegistration = new Registration({
            name,
            email,
            phone,
            college,
            teamName,
            branch,
            year,
            course,
            members
        });

        await newRegistration.save();

        res.status(201).json({ message: 'Registration successful!', registration: newRegistration });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error during registration.', error: error.message });
    }
});

module.exports = router;
