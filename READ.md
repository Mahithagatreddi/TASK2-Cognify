# Level 1: Task 2 — Inline Styles, Basic Interaction, and Server-Side Validation

An interactive, full-stack enrollment registration portal built as part of the **Cognifyz Technologies Full Stack Development Internship**. This project focuses on implementing a dual-layered validation engine (client-side + server-side), utilizing extensive inline component styles, and mimicking transient database storage with an in-memory server-side array pipeline.

---

## 🚀 Key Features

* **Advanced User Input Matrix:** A clean, responsive form capturing user fields: Full Name, Email Address, Contact Number, Specialization Track, and Experience Tier.
* **Dual-Layer Validation Architecture:**
  * **Client-Side Validation:** Integrated inline JavaScript on form submission to instantaneously parse the contact number layout, preventing faulty data transmissions and providing real-time warning indicators.
  * **Server-Side Validation Engine:** Built robust back-end conditional validation paths inside Express routes checking input lengths, empty bounds, and regex email matching before updating state variables.
* **State Preservation (Sticky Forms):** If a back-end check fails, the application re-renders the input page while caching previous inputs via EJS variables, ensuring users don't have to re-type data.
* **Transient Memory Ledger:** Implemented a global JavaScript array acting as an in-memory database simulation to hold and process valid user submissions dynamically.
* **Dynamic Analytics Dashboard:** Built an administrative table page that iterates over stored entries and custom-renders badge colors depending on the user's proficiency tier.
* **Clean & Compliant Inline CSS:** Styled every component explicitly with clean, standard inline properties, specifically optimized to avoid IDE compiler syntax errors.

---

## 🛠️ Tech Stack & Architecture

* **Runtime Environment:** Node.js
* **Backend Framework:** Express.js
* **Template View Engine:** EJS (Embedded JavaScript)
* **Design Engine:** Static Inline CSS3 (Validated Syntax Layout)

---

## 📂 Project Structure

```text
task2-validation-app/
├── views/
│   ├── form.ejs         # Form layout with inline client-side JavaScript
│   └── dashboard.ejs    # In-memory storage table layout views
├── server.js            # Core Express engine routing and validation logic
├── package.json         # Dependency configuration manifest
└── README.md            # Project documentation ledger