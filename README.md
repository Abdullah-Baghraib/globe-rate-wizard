# Forexly

A simple and intuitive currency converter application built with React, TypeScript, and Vite.

## Features

*   Convert between a wide range of currencies.
*   View the latest exchange rates.
*   Swap "from" and "to" currencies with a single click.
*   User-friendly interface with a clean and modern design.
*   Responsive design for use on both desktop and mobile devices.

## Live Demo

Check out the live demo of the application [here](https://forexly.vercel.app/).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v14 or later)
*   npm or yarn

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/Abdullah-Baghraib/forexly.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm run dev
    ```

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in the development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the code using ESLint.
*   `npm run preview`: Serves the production build locally for preview.

## Technologies Used

*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [shadcn/ui](https://ui.shadcn.com/)
*   [React Query](https://tanstack.com/query/v5)
*   [Axios](https://axios-http.com/)
*   [React Router](https://reactrouter.com/)

## File Structure

```
.
├── public
│   ├── favicon.ico
│   └── ...
├── src
│   ├── assets
│   ├── components
│   │   ├── ui
│   │   ├── CurrencyConverter.tsx
│   │   └── CurrencySelector.tsx
│   ├── data
│   │   └── currencies.ts
│   ├── hooks
│   │   └── ...
│   ├── lib
│   │   └── utils.ts
│   ├── pages
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── .gitignore
├── index.html
├── package.json
└── ...
```

## API Used

This project uses the [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch the latest currency exchange rates.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

*   Developed by [Abdullah.dev](https://abdullahdev-five.vercel.app/)
