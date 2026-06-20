/**
 * Classifies a given date relative to today.
 * @param {Date} date - The date to classify.
 * @returns {string} - One of: "past", "ancient", "future", "distant future"
 */

function classifyDate(date) {
    // Get today's date 
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Get the input date at midnight
    const given = new Date(date.getFullYear(), date.getMonth(), date.getDate())

    // difference in days
    const diffDays = (given -today) / (1000 * 60 * 60 * 24);

    if (diffDays > 365) {
        return "distant future";
    }else if (diffDays < -365){
        return "ancient";
    }else if (diffDays > 0) {
        return "future";
    }else {
        return "past"
    }

}


console.log(classifyDate(new Date(2025, 5, 20))); // exactly one year ago → "past"
console.log(classifyDate(new Date(2025, 5, 19))); // more than a year ago → "ancient"
console.log(classifyDate(new Date(2026, 5, 20))); // today → "past"
console.log(classifyDate(new Date(2026, 5, 21))); // tomorrow → "future"
console.log(classifyDate(new Date(2027, 5, 20))); // exactly one year from now → "future"
console.log(classifyDate(new Date(2027, 5, 21))); // more than a year from now → "distant future"
