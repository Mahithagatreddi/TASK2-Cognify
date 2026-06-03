const express = require('express');
const path = require('path');

const app = express();
// Configured to 3002 to prevent network conflicts
const PORT = process.env.PORT || 3002;

// 1. Temporary Server-Side Storage Array
const temporaryStorage = [];

// 2. View Engine Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 3. Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET Route: Render Enrollment Form
app.get('/', (req, res) => {
    res.render('form', { errors: {}, oldInput: {} });
});

// GET Route: View Stored Database Records
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { records: temporaryStorage });
});

// POST Route: Handle Complex Validation & Storage Pipeline
app.post('/enroll', (req, res) => {
    const { fullName, email, phone, course, experience } = req.body;
    let errors = {};

    // --- Server-Side Validation Engine ---
    if (!fullName || fullName.trim().length < 3) {
        errors.fullName = "Name must be at least 3 characters long.";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.email = "Please provide a valid email address.";
    }

    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
        errors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!course) {
        errors.course = "Please select a core program domain.";
    }

    if (!experience) {
        errors.experience = "Please select your current experience tier.";
    }

    // If validation fails, re-render form with accurate field errors
    if (Object.keys(errors).length > 0) {
        return res.render('form', { errors, oldInput: req.body });
    }

    // --- Temporary Storage Operations ---
    const verifiedRecord = {
        id: 'UID-' + Date.now().toString().slice(-6),
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        course,
        experience,
        submittedAt: new Date().toLocaleTimeString()
    };

    temporaryStorage.push(verifiedRecord);

    // Redirect to database dashboard view upon success
    res.redirect('/dashboard');
});

// Spin Up App
app.listen(PORT, () => {
    console.log(`🚀 Task 2 Server executing on http://localhost:${PORT}`);
});