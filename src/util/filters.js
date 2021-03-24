export const byLanguage = (kata, state) => {
    if (state.language === "none") return true;
    return kata.completedLanguages.includes(state.language)
}

export const byRank = (kata, state) => {
    if (state.rank == "none") return true;
    return kata.rank === state.rank 
}