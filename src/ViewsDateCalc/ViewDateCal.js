 export function TimeCalculator({ date }) {
    let time = Date.now() - Date.parse(date);
    let time_hour = Math.ceil(time / 3600000);
    if (time_hour < 23)
        return time_hour + ' hours ago'
    else if (time_hour === 24)
        return Math.ceil(time_hour / 24) + ' day ago'
    else
        return Math.ceil(time_hour / 24) + ' days ago'
}

 export function ViewCalculator({ views }) {
    if (views > 1000000)
        return Math.round(views * 100 / 1000000) / 100 + 'M views'
    else
        return Math.round(views * 100 / 1000) / 100 + 'k views'
}