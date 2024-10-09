import clsx from 'clsx'
import { CustomListTheme, MockCustomListItems } from './custom-list.constants'
import { CustomListProps } from './custom-list.types'

import styles from './custom-list.module.css'
import { CustomListItem } from './children/item'

export const CustomList: React.FC<CustomListProps> = ({ theme }) => {
    return (
        <div
            className={clsx(styles.root, {
                [styles.light]: theme === CustomListTheme.Light,
                [styles.dark]: theme === CustomListTheme.Dark,
            })}
        >
            <h2>Custom List</h2>
            {MockCustomListItems.map((text) => (
                <CustomListItem text={text} />
            ))}
        </div>
    )
}
