# YouTube Clone

A YouTube clone application built using **React**, **Tailwind CSS**, **Redux**, and **Infinite Scroll**, simulating the YouTube homepage's video feed, sidebar, and navigation. This project pulls video data from YouTube's API (or a mock API) and displays it in a card layout with infinite scrolling, providing a seamless user experience for browsing videos.

## Features

- **Navbar**: Displays the application’s header, including essential navigation such as the search bar, logo, and icons.
- **Sidebar**: A fixed sidebar with categories like **Home**, **Trending**, **Subscriptions**, etc., enhancing navigation (similar to YouTube's layout).
- **Video Feed**: Displays a grid of video cards with video titles, thumbnails, channel info, and video stats (views, age).
- **Infinite Scroll**: Automatically loads more videos as the user scrolls down the page, simulating YouTube's infinite scroll feature.
- **Responsive Design**: The layout adjusts dynamically to different screen sizes for a smooth user experience, using Tailwind CSS.
- **Spinner**: A loading spinner appears when videos are being fetched or when more videos are being loaded.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Redux**: A state management library for React applications, used to manage global state.
- **Infinite Scroll**: A React component that implements infinite scrolling behavior.
- **Axios**: A promise-based HTTP client for the browser and Node.js, used to fetch data from the API.
- **TypeScript (optional)**: If you wish to add TypeScript for type safety (optional but recommended for large projects).
- **YouTube API**: Fetches video data from YouTube for the video feed, video details, and recommended videos.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node package manager, typically comes with Node.js)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/youtube-clone.git
    cd youtube-clone
    ```

2. **Install the required dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

This will start the React development server, and you can view the app by navigating to `http://localhost:3000` in your browser.

## Folder Structure

```bash
/src
  /components
    - Navbar.jsx          // Navbar component
    - Sidebar.jsx         // Sidebar component
    - Card.jsx            // Video card component
    - Spinner.jsx         // Loading spinner component
  /hooks
    - userApp.js          // Custom hook for accessing Redux store
  /store
    /Reducers
      - getHomePageVideos.js // Redux action and reducer for fetching videos
      - getVideoDetails.js   // Redux action and reducer for fetching video details
  /styles
    - App.css             // Global styles
  /App.jsx                // Main App component
  /index.js               // Entry point for the app
```

![youtube clone](./src/assets/youtube%20clone.png)
![youtube clone 2](./src/assets/youtube%20clone%202.png)


<img src="./images/image1.jpg" alt="Image 1" width="400" height="300" />
<img src="./images/image2.jpg" alt="Image 2" width="400" height="300" />
