# 💬 Chat Web App

A real-time web application for instant messaging and seamless communication.

![Chat Web App Preview Image](https://res.cloudinary.com/dgkhbg0wc/image/upload/v1758255464/Screenshot_2025-09-19_094601_rpvklw.png)


## ✨ Features

*   **✨ Real-time Messaging:** Send and receive messages instantly without page reloads, powered by WebSockets.
*   **👥 User Authentication:** Secure login and registration with robust user session management.
*   **🔗 Private Chats:** Engage in one-on-one conversations.
*   **🎀 Profile management:** User can update their profile name, bio, pic.
*   **📱 Responsive Design:** Enjoy a seamless chat experience across various devices, from desktop to mobile.
*   **🚀 Easy Setup:** Get started quickly with a straightforward installation and configuration process.


## ⚙️ Installation Guide

Follow these steps to get your Chat Web App up and running locally.

### Prerequisites

Ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
*   [npm](https://www.npmjs.com/get-npm) 

### Step-by-Step Setup

1.  **Clone the Repository**

    Begin by cloning the project repository to your local machine:

    ```bash
    git clone https://github.com/sadhvi1244/Chat_Web_App.git
    cd Chat_Web_App
    ```

2.  **Install Server Dependencies**

    Navigate into the `server` directory and install the necessary packages:

    ```bash
    cd server
    npm install # or yarn install
    ```

3.  **Configure Server Environment Variables**

    Create a `.env` file in the `server` directory and add your environment variables. This is crucial for database connection, JWT secrets, and other sensitive configurations.

    ```dotenv
    # Example .env file for the server
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/chat_app_db # Replace with your MongoDB connection string
    JWT_SECRET=your_super_secret_jwt_key # Generate a strong, unique key
    ```

4.  **Install Client Dependencies**

    Return to the project root, then navigate into the `client` directory and install its dependencies:

    ```bash
    cd ../client
    npm install 
    ```


## 🚀 Usage Examples

After successfully installing the dependencies and configuring the environment, you can launch the application.

1.  **Start the Server**

    From the `server` directory, run:

    ```bash
    cd server
     npm run start
    ```

2.  **Start the Client**

    From the `client` directory, run:

    ```bash
    cd ../client
    npm run start 
    ```

Once both the server and client are running, open your web browser and navigate to `http://localhost:5000` (or the port specified for the client). You can then register a new account or log in with existing credentials to start chatting!


## 🗺️ Project Roadmap

Our vision for the Chat Web App includes continuous improvement and exciting new features.

### Version 1.1.0 - Enhanced Communication

*   **💬 Emoji Support:** Integrate a rich emoji picker for more expressive conversations.
*   **📁 File Sharing:** Implement functionality to share images, documents, and other files directly within chats.
*   **🔔 Improved Notifications:** Enhance real-time notifications for new messages and user activities.

### Future Enhancements

*   **📞 Group Chats:** Implement group chat features where users can talk to each other.
*   **🔒 End-to-End Encryption:** Implement robust encryption for private and group chats to ensure maximum privacy.


## ⚖️ License Information

**Copyright (c) 2025 sadhvi1244.** All rights reserved.

For inquiries regarding licensing or usage, please contact the main contributor.
