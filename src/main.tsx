import { createRoot } from 'react-dom/client'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import "./main.css"


import router from "./routes.jsx";
import { RouterProvider } from "react-router";
import { ThemeProvider } from './context/ThemeContext';


createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
)
