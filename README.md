🌍 Country Search App

A simple React + TypeScript project that displays a list of countries with their flags and allows users to search for countries in real-time.

📝 Features

Fetches a list of countries from an API.

Displays country name and flag in a card view.

Search functionality to filter countries by name.

Loading and error handling for API requests.

Built with React, TypeScript, and CSS modules.

⚡ Tech Stack

React – Frontend library for building the UI

TypeScript – Static typing for better development experience

CSS Modules – Scoped styling

Hooks – useState, useEffect, and custom hooks for fetching data

API – REST Countries API

🖥️ Screenshots

🚀 Installation

Clone the repository:

git clone https://github.com/yourusername/country-search-app.git

Install dependencies:

cd country-search-app
npm install

Start the development server:

npm run dev

Open your browser at http://localhost:5173

📂 Project Structure
src/
├─ components/
│ └─ common/
│ └─ Layout.tsx
├─ hooks/
│ └─ useCountry.ts
├─ types/
│ └─ index.ts
├─ ui/
│ └─ Card/
│ ├─ Card.tsx
│ ├─ Error.tsx
│ └─ Placeholder.tsx
├─ App.tsx
└─ main.tsx

Layout.tsx – Main layout component with search input

useCountry.ts – Custom hook to fetch country data

Card.tsx – Displays a country with its flag

Error.tsx – Error message display

Placeholder.tsx – Loading skeleton while fetching data

🔧 How It Works

The app fetches all countries from the API when it loads.

Users can type in the search input in the layout.

The app filters the countries in real-time based on the search query.

Cards display the country name and flag.

If the API fails, an error message is displayed.

While fetching, a placeholder/loading component is shown.

🎯 Future Improvements

Add pagination for better performance with large lists

Add country details page

Improve UI with Tailwind CSS or Material UI

Implement debounced search for better performance
