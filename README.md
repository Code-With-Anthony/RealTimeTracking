# Real-Time Location Tracking Application

## Overview

This project is a real-time location tracking application built using Node.js, Socket.io, and Leaflet. The application allows multiple users to share their geographical locations in real-time, visualizing their positions on a dynamic map. Users can see each other's markers and receive updates whenever their location changes, making it ideal for collaborative scenarios or for tracking friends and family.

## Features

- **Real-Time Location Sharing**: Users can share their locations with others in real-time.
- **Dynamic Map Visualization**: Leveraging Leaflet.js, the application displays user locations on an interactive map.
- **Marker Clustering**: Utilizes Leaflet MarkerCluster to handle multiple markers efficiently, enhancing the user experience.
- **Responsive Design**: The web application is designed to be responsive, ensuring usability across various devices (desktop and mobile).
- **Location Update Handling**: Users are updated on each other’s movements, with real-time updates sent every 5 seconds.

## Technologies Used

- **Node.js**: For the backend server.
- **Socket.io**: For real-time communication between clients and the server.
- **Leaflet.js**: For mapping and visualizing user locations on a web map.
- **Express**: For serving the application and managing routes.
- **EJS**: For rendering views on the server side.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/repo-name.git](https://github.com/Code-With-Anthony/RealTimeTracking.git
   ```
   
2. **Navigate to the Project Directory**:
   ```bash
   cd repo-name
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```
   
5. **Additional Installation of Dev Dependency**
   ```bash
   npm install --save-dev nodemon
   ```
   
6. **Access the App**:
   Open your web browser and navigate to `http://localhost:3000`.

## Usage

- After starting the server, navigate to the URL provided in your browser.
- Allow location permissions when prompted to enable real-time location tracking.
- You can open the application in multiple browser tabs or devices on the same network to see the real-time updates.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


### Notes:
- If you want to contribue then you can connect me as well on any social media account or on email and do not push code directly on main branch insted work on the sub branch and take a pull from latest main branch and then generate a pull request from your branch after the updates/changes you are contributing is done. Thanks!
