import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./store"

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ChakraProvider>
      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>

)
