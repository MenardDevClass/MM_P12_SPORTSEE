//@ts-check

/**
 * @file index.js is the root file
 * @author Menard Maxime
 * @see <a 
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../src/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
