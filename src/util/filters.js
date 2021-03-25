export const byLanguages = (kata, state) => {
    if (state.languages.length === 0) return true
    return state.languages.every(lang => kata.completedLanguages.includes(lang))
}

export const byRank = (kata, state) => {
    if (state.rank.length === 0) return true;
    return kata.rank === state.rank
}

export const byTitle = (kata, state) => {
    if (state.title.length <= 1) return true
    const regExp = new RegExp('.*' + state.title.toLowerCase() + '.*')
    return regExp.test(kata.name.toLowerCase())
}