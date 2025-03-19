# News App

This is a news application that fetches the latest news from various APIs and displays them based on a search term. The app provides options to choose different news APIs, such as NewsAPI, The Guardian, New York Times etc.

## Live Link

You can view the live app here:  
[Live App Link](https://newsapp-latest-assessment.netlify.app/)

## Features

- Fetches and displays news articles based on the search keyword.
- Allows users to select different news sources (NewsAPI, The Guardian, NY Times).
- Built with React, TypeScript, and Axios for fetching data.

## Tech Stack

- **React.js** - JavaScript library for building user interfaces.
- **TypeScript** - Superset of JavaScript for static typing.
- **Axios** - HTTP client for making requests.
- **Netlify** - Deployment platform.
- **CSS** (or SCSS) - Styling the application.

## Setup Instructions

Follow these steps to set up the project locally.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/news-app.git
cd news-app
npm install
```

### 3. Add Environment Variables

To run the application locally, you'll need to set up the environment variables for your API keys.

Create a .env file in the root of the project and add the following:

```bash
REACT_APP_NEWSAPI_KEY=your-newsapi-key
REACT_APP_GUARDIAN_KEY=your-guardian-api-key
REACT_APP_NYT_KEY=your-nyt-api-key
```

Replace `your-newsapi-key`, `your-guardian-api-key`, and `your-nyt-api-key` with the actual API keys from the respective services.

### 4. Run the Development Server

Now that everything is set up, start the development server:

```bash
npm start
```

### 5. Deployment

This app is deployed using Netlify. After making changes or updates, you can push them to your repository, and Netlify will automatically deploy the latest version.

To deploy on Netlify manually:

- Push your changes to your Git repository (GitHub, GitLab, etc.).
- Connect the repository to Netlify via the Netlify dashboard.
- Netlify will automatically build and deploy your app after each push.
