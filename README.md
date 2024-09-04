# jsonplaceholder-crud-app

![GitHub repo size](https://img.shields.io/github/repo-size/evanch98/jsonplaceholder-crud-app)
![GitHub stars](https://img.shields.io/github/stars/evanch98/jsonplaceholder-crud-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/evanch98/jsonplaceholder-crud-app?style=social)

## Description

A user-friendly frontend application using Next.js, React, TypeScript, Tailwind CSS, Zustand, JSONPlaceholder and Shadcn UI. This application allows users to interact with the JSONPlaceholder API for CRUD operations.

You can test the live application [here](https://jsonplaceholder-crud-app.vercel.app/).

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

1. **Clone the repository:**

```bash
git clone https://github.com/evanch98/jsonplaceholder-crud-app.git
cd your-repo-name
```

2. **Install the required dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Formatting the Code:**

Run  the following command to format the code to match the code formatting rule for this project.
```bash
npm run format
```

## Development

- The components for this project are located in the `src/components` folder.
- The `src/app` folder contains pages (`page.tsx` and `posts/page.tsx`), layout file (`layout.tsx`), and the global style file (`globals.css`).
- The `src/app/api` folder contains the api routes to interact with the JSONPlaceholder API.
- The `src/store` folder contains global state management files.
- The `src/store/use-data.ts` file is for handling data from the JSONPlaceholder API.

## Technologies Used in This Project

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Shadcn UI](https://ui.shadcn.com/)
