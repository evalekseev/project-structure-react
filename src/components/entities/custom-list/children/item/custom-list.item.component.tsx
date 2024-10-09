import { CustomListItemProps } from './custom-list.item.types'

export const CustomListItem: React.FC<CustomListItemProps> = ({ text }) => {
    return (
        <div>
            <h3>{text}</h3>
        </div>
    )
}
