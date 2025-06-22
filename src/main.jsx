
import { createRoot } from 'react-dom/client'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import "./main.css"


import router from "./routes";
import { RouterProvider } from "react-router";


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
