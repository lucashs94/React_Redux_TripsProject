import { Router } from 'react-router-dom'
import Routes from "./routes"
import history from './services/history'

import { Provider } from 'react-redux'

import store from './store'

import Header from './components/Header'



export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header/>
        <Routes/>
      </Router>
    </Provider>
  )
}