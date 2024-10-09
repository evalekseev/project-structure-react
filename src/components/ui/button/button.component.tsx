import { ButtonProps } from './button.types'

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>
}
