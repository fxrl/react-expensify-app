// Set Text Filter
export const setTextFilter = (text = ' ') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// Sort by Amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// Sort by Date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})


//Set Start Date
export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

//Set End Date
export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})