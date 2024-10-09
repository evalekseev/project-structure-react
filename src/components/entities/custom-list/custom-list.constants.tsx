export const CustomListTheme = {
    Light: 'Light',
    Dark: 'Dark',
} as const

export type CustomListTheme = (typeof CustomListTheme)[keyof typeof CustomListTheme]

export const MockCustomListItems = ['next', 'nest', 'nuxt']
