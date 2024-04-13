# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Video Playlist Application

The Video Playlist Application is a web application built using React and TypeScript. It allows users to view a list of videos in a playlist format, with each video displaying its title, thumbnail, and description. Users can drag and drop videos to reorder the playlist according to their preference.

## Live Demo
View the deployed application: [Video Playlist App](https://your-app-url.com)

## Features
- **Video Playlist Display**:
  - The application fetches video data from a JSON file, which includes information such as video title, thumbnail URL, description, and a unique ID for each video.
  - Each video in the playlist is displayed with its title, thumbnail image, and a brief description.

- **Drag and Drop Reordering**:
  - Users can rearrange the order of videos in the playlist by dragging and dropping them.
  - The `sortOrder` field in the video data is used to maintain the order of videos after reordering.

- **Responsive Design**:
  - The application is designed to be responsive, providing a consistent user experience across different devices and screen sizes.
  - The playlist adjusts its layout to fit various screen widths, ensuring usability on desktops, tablets, and mobile devices.

## Additional Notes
- **Technologies Used**:
  - React: Front-end library for building user interfaces.
  - TypeScript: Provides type-checking and improved code readability.
  - CSS (with Tailwind CSS): Used for styling components.

- **Deployment**:
  - The application is deployed on [Netlify](https://rigi-video-playlist.netlify.app/).

- **Running Locally**:
  1. Clone the repository:
     ```sh
     git clone https://github.com/msskarthik/rigi-assessment.git
     ```
  2. Navigate to the project directory:
     ```sh
     cd your-repo
     ```
  3. Install dependencies:
     ```sh
     npm install
     ```
  4. Start the development server:
     ```sh
     npm start
     ```
  5. Access the application at `http://localhost:3000`.
