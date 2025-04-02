# Advanced React To-Do Application with API Integration

## Overview
This is an advanced To-Do application built using React that includes authentication, state management with Redux, API integration, and a user-friendly responsive design. The application allows users to create, view, prioritize, and delete tasks while also displaying weather information fetched from an API. Authentication ensures that only logged-in users can access the app.

## Features
 **User Authentication**: Users must log in to access the to-do list.
 **Task Management**:
   - Add new tasks
   - Delete tasks
   - Assign priority (High, Medium, Low)
**Redux for State Management**
**Weather API Integration**: Displays current weather conditions.
**Fully Responsive UI**: Works smoothly on mobile, tablet, and desktop devices.
**Sticky Navbar**: Always accessible at the top while scrolling.
**Persistent Storage**: Saves tasks and authentication status.

## Technologies Used
- **Frontend**: React, Redux, React Router, Tailwind CSS
- **State Management**: Redux Toolkit
- **API Integration**: Axios (for fetching weather data)
- **Storage**: Local Storage (for tasks and authentication state)
- **Deployment**: Vercel 

## Installation & Setup
### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the project root and add your **OpenWeather API Key**:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

### **4. Start the Development Server**
```bash
npm run dev
```
Then, open **http://localhost:5173/** in your browser.

## Folder Structure
```
react-todo-app/
│── src/
│   ├── components/
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   ├── WeatherInfo.jsx
│   │   ├── Navbar.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   ├── redux/
│   │   ├── store.js
│   │   ├── authSlice.js
│   │   ├── taskSlice.js
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── .env
│── package.json
│── README.md
```

## Deployment
To deploy the app on **Vercel**, follow these steps:
```bash
npm run build
vercel deploy
```

## License
This project is licensed under the **MIT License**.

## Author
Developed by **Farhanur Rahman** - [GitHub](https://github.com/farhanrahman0027)
---


