import calculate_day from "./calender.mjs";
import { month_table_code, day_code, remainder_code } from "./calender.mjs";

//  Input dates 
const dict = {
    '2020-01-01': 4,
    '2020-01-02': 4,
    '2020-01-03': 6,
    '2020-01-04': 8,
    '2020-01-05': 2,
    '2020-01-06': 6,
    '2020-01-07': 2,
    '2020-01-08': 2
}

//  Creating a hashmap for storing all the values of a particular day.
const resultMap = new Map();

// To maintain the order in hashmap , we are creating an array for this purpose.
const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//  Setting all the days in map to zero.
arr.map((day) => {

    resultMap.set(day, 0);


})

//  iterating the dict Object and hashing in the map.
for (let key in dict) {
    let day = calculate_day(key);
    let value = dict[key];
    if (resultMap.has(day))
        resultMap.set(day, resultMap.get(day) + value)


}

//  Converting the hashmap to dictionary as asked in question.
const result = Object.fromEntries(resultMap);

//  Output of the result
console.log(result);
