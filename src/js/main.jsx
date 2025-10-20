// Import our custom CSS
import '../scss/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// Import React and ReactDOM
import "../i18n";



// Render the React component into the root div

import ReactDOM from 'react-dom/client'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {routes} from '../routes'

const basePath = new URL(
  import.meta.env.BASE_URL,
  document.baseURI
).pathname.replace(/\/$/, '') || '/'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider basename={basePath} router={routes } />
)