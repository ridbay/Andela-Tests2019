// Task
// Finish the function numberToOrdinal, which should take a number and return it as a string with the correct ordinal indicator suffix (in English). For example, 1 turns into "1st".

// For the purposes of this challenge, you may assume that the function will always be passed a non-negative integer. If the function is given 0 as an argument, it should return '0' (as a string).

// To help you get started, here is an excerpt from Wikipedia's page on Ordinal Indicators:

// st is used with numbers ending in 1 (e.g. 1st, pronounced first)
// nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
// rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
// As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
// th is used for all other numbers (e.g. 9th, pronounced ninth).
// Specification
// numberToOrdinal(number)
// take a number and return it as a string with the correct ordinal indicator suffix (in English)

// Parameters
// number: Number - The number to be converted to a string ordinal

// Return Value
// String - Returns a string ordinal based off of the number.

// Constraints
// 0 ≤ number ≤ 10000

// Examples
// number	Return Value
// 1	"1st"
// 2	"2nd"
// 3	"3rd"
// 4	"4th"
// 21	"21st"

function numberToOrdinal(num) {
    if (num === 0) {
        return '0'
    };
    let i = num.toString(), j = i.slice(i.length - 2), k = i.slice(i.length - 1);
    if (j >= 10 && j <= 20) {
        return (i + 'th')
    } else if (j > 20 && j < 100) {
        if (k == 1) {
            return (i + 'st')
        } else if (k == 2) {
            return (i + 'nd')
        } else if (k == 3) {
            return (i + 'rd')
        } else {
            return (i + 'th')
        }
    } else if (j == 1) {
        return (i + 'st')
    } else if (j == 2) {
        return (i + 'nd')
    } else if (j == 3) {
        return (i + 'rd')
    } else {
        return (i + 'th')
    }
}
