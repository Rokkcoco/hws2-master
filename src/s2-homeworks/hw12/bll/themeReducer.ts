const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: {type: string, id: number}): {themeId: number} => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id }
        default:
            return state
    }
}
export const changeThemeId = (id: number): {type: string, id: number} => ({ type: 'SET_THEME_ID', id }) // fix any
