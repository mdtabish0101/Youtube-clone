# YouTube Clone

A YouTube clone application built using **React**, **Tailwind CSS**, **Redux**, and **Infinite Scroll**, simulating the YouTube homepage's video feed, sidebar, and navigation. This project pulls video data from YouTube's API and displays it in a card layout with infinite scrolling, providing a seamless user experience for browsing videos.

## Features

- **Navbar**: Displays the application’s header, including essential navigation such as the search bar, logo, and icons.
- **Sidebar**: A fixed sidebar with categories like **Home**, **Trending**, **Subscriptions**, etc., enhancing navigation (similar to YouTube's layout).
- **Video Feed**: Displays a grid of video cards with video titles, thumbnails, channel info, and video stats (views, age).
- **Infinite Scroll**: Automatically loads more videos as the user scrolls down the page, simulating YouTube's infinite scroll feature.
- **Responsive Design**: The layout adjusts dynamically to different screen sizes for a smooth user experience, using Tailwind CSS.
- **Spinner**: A loading spinner appears when videos are being fetched or when more videos are being loaded.

## Tech Used

- **React**
- **Tailwind CSS**
- **Redux**
- **Infinite Scroll**
- **Axios**
- **YouTube API**

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node package manager, typically comes with Node.js)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mdtabish0101/youtube-clone.git
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

This will start the React development server, and you can view the app.


![youtube clone](./src/assets/youtube%20clone.png)
![youtube clone 2](./src/assets/youtube%20clone%202.png)

**⚠️ This App is currently under upgradation! ⚠️**

As of now, the videos cannot be watched when clicked, and the recommended videos do not display. The code for these features is written, but there are some bugs that need to be fixed. I will be addressing these issues in the future updates.