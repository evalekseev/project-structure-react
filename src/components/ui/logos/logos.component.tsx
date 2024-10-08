import reactLogo from './static/images/react.svg'
import viteLogo from './static/images/vite.svg'
import './static/styles/App.css'

export const Logos = () => {
    return (
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
    )
}
