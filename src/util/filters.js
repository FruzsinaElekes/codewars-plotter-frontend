export const byLanguages = (kata, state) => {
    if (state.languages.length === 0) return true
    return state.languages.every(lang => kata.completedLanguages.includes(lang))
}

export const byRank = (kata, state) => {
    if (state.rank.length === 0) return true;
    return kata.rank === state.rank
}