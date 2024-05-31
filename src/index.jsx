import React, { Children } from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { App } from "./components/App";
import { HomePage } from "./pages/HomePage";
import './i18n';
import './global.css';
import { SearchResults } from "./pages/SearchResults";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search-results",
        element: <SearchResults />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
