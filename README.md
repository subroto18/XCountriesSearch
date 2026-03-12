# 🌍 Country Explorer

A simple **React + TypeScript** application that fetches country data from an API and displays it in a responsive card layout. The project demonstrates modern React practices such as **custom hooks, loading skeletons, error handling, and reusable components**.

---

## 🚀 Features

- Fetches country data from an external API
- Displays countries in a **responsive grid layout**
- **Custom React Hook** for API fetching
- **Loading placeholder (skeleton cards)** while data loads
- **Error state handling**
- Built with **React + TypeScript**
- Clean and scalable folder structure

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **CSS Grid for responsive layout**
- **Custom Hooks**
- **Fetch API**

---

## 📡 API Used

Country data is fetched from:

```
https://xcountries-backend.labs.crio.do/all
```

Each country object contains:

- `name`
- `flag`
- `abbr`

---

## 📂 Project Structure

```
src
 ├── hooks
 │    └── useCountry.ts
 │
 ├── types
 │    └── index.ts
 │
 ├── ui
 │    └── Card
 │        ├── Card.tsx
 │        ├── Error.tsx
 │        └── Placeholder.tsx
 │
 ├── App.tsx
 └── App.css
```

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository

```bash
git clone <your-repo-url>
```

2️⃣ Navigate into the project

```bash
cd country-explorer
```

3️⃣ Install dependencies

```bash
npm install
```

4️⃣ Start the development server

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---

## 📦 How It Works

1. The **custom hook (`useCountry`)** fetches country data from the API.
2. While the API request is in progress, **placeholder skeleton cards** are displayed.
3. If the API fails, an **error component** is shown.
4. Once data is successfully fetched, the **country cards are rendered in a grid layout**.

---

## 🧠 Concepts Demonstrated

- React **Custom Hooks**
- **API fetching** using Fetch
- **Loading and Error UI states**
- **TypeScript typing**
- **Reusable UI components**
- **Responsive card layout**

---

## 📸 UI States

| State   | Description             |
| ------- | ----------------------- |
| Loading | Displays skeleton cards |
| Error   | Shows error message     |
| Success | Renders country cards   |

---

## 🌟 Future Improvements

- Add **search functionality**
- Add **country filtering**
- Add **debounced search**
- Add **pagination**
- Improve **UI/UX design**

---

## 👨‍💻 Author

**Subroto Chakraborty**

Frontend Developer passionate about building clean and scalable web applications using **React, TypeScript, and modern frontend tools**.

---

## 📄 License

This project is open-source and available under the **MIT License**.
# XCountriesSearch
