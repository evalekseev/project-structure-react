import './static/styles/App.css'
import { Logos } from '../../components/ui/logos'
import { Button } from '../../components/ui/button'
import { Counter } from '../../components/entities/counter'
import { AppProps } from './app.types'

export const App: React.FC<AppProps> = ({ title }) => {

    return (
        <>
            <Logos />
            <h1>{title}</h1>
            <div className="card">
                <Counter />
                <Button text={'people?'} onClick={() => console.log('bu')} />
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    )
}
