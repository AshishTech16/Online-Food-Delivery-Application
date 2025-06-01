🛒 **Online Food Booking Application**
Live Demo: https://onlinefoodbookingappication.netlify.app/

This repository features a fully responsive, production-ready Online Food Booking Application, engineered using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a seamless user and admin experience, leveraging Redux Toolkit for efficient state management and Material UI for consistent, modern design components.

🚀 **Technologies Used**
Frontend: React.js, Redux Toolkit, Material UI, Axios, React Router DOM

Backend: Node.js, Express.js, RESTful API architecture

Database: MongoDB with Mongoose ODM

Authentication & Security: JSON Web Tokens (JWT), bcrypt hashing, HTTP-only cookies, CORS

Deployment: Netlify (Frontend), Render/Heroku (Backend), MongoDB Atlas (Cloud DB)

Dev Tools: Postman, Git, GitHub, ESLint, Prettier

⚙️ **Core Features**
🔐 Authentication & Authorization
Secure JWT-based authentication with access and refresh tokens for session management.

Password hashing using bcrypt to protect user credentials.

Role-Based Access Control (RBAC) for granular permission levels (user vs. admin).

Middleware-based route protection with automatic token verification.

🍽️ Food Ordering & Menu Management
Users can search, filter, and sort food items based on categories, pricing, and availability.

Cart system with quantity control, subtotal calculation, and order placement logic.

Orders are persisted in MongoDB and linked to user accounts for tracking.

Admins can add, update, or delete food items and monitor order pipelines via dashboard.

🖥️ Admin Dashboard
Dedicated admin interface built with protected routes and dynamic rendering based on auth role.

Admins can manage food inventory, update pricing, toggle availability, and view placed orders.

Order statuses can be updated (e.g., Pending → Confirmed → Delivered), triggering real-time UI updates.

🧭 UI/UX & Frontend Logic
Fully responsive design using Material UI Grid system and custom theming.

Global state managed via Redux Toolkit slices and asynchronous thunks for API calls.

Robust form validation, error handling, and UI feedback using controlled components.

Integrated Axios interceptors to manage token refresh and error responses centrally.

**Developed and maintained by Ashish Kumar.**

