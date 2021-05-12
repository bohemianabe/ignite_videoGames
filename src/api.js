require('dotenv').config()

const RAWG_KEY = process.env.REACT_APP_API_KEY
const key = `key=${RAWG_KEY}`

// base usrl
const base_url = "https://api.rawg.io/api/"

// getting the date
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

// get the month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`
    } else {
        return month;
    }
}

// current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

console.log(currentDate)
// popular games
const popular_games = `games?${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesUrl = () => `${base_url}${popular_games}`

// console.log(popularGamesUrl())
