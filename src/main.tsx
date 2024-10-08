import { createRoot } from 'react-dom/client'
import { App } from './pages/app'
import './styles/global.css'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App title="Project Structure React" />
    </Provider>
)
