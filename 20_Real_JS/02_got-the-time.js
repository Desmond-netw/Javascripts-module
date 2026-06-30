/**
 * Printing Date obj in a human readable format
 * Function to get the time
 */

function printPrettyDate (date) {

    // days
    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ];

    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

     const dayName = days[date.getUTCDay()];
  const monthName = months[date.getUTCMonth()];
  const dayNum = date.getUTCDate();
  const year = date.getUTCFullYear();

  let hours = date.getUTCHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // 12‑hour format

  const formattedHours = String(hours).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');


    console.log( `Today is ${dayName}, ${monthName} ${dayNum}, ${year},` + ` and the time is ${formattedHours}:${minutes}:${seconds} ${ampm}.`)


}


printPrettyDate(new Date('Sat Mar 03 2063 18:20:33 GMT+0000 (Coordinated Universal Time)'));