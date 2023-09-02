/**
 * This utility function converts timestamp string into datetime string
 * @param {string} timestamp - The varible contain datetime string generated by Date.now
 * @returns {string} - It returns a string containing date.
 */
export default function fetchDate(timestamp) {
    const datetime = new Date(Number(timestamp));
    let date = datetime.toDateString().split(' ');
    return `${date[1]} ${date[2]}, ${date[3]}, ${datetime.getHours()}:${datetime.getMinutes()}`;
}