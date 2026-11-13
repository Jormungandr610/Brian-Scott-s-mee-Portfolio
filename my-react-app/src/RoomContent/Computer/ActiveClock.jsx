    const timenow = new Date()
    const timehour = timenow.getHours()
    const timemin = timenow.getMinutes()

    const timehourswap = timehour % 12 || 12
    const timeam = timehour >= 12 ? "PM" : "AM"

    const timeformatted = `${timehourswap}:${timemin.toString().padStart(2, "0")} ${timeam}`  

export default function Clock(){
    return (
        <div
        className="time">
            {timeformatted}
        </div>
    )
}