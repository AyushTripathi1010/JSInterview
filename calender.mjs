// The folowing code has been taken on the basis on Zeller's Rule, for the conversion
// of date to day.
export const month_table_code = {
    0: {},
    1: { norm: 1, leap: 0 },
    2: { norm: 4, leap: 3 },
    3: { norm: 4, leap: 4 },
    4: { norm: 0, leap: 0 },
    5: { norm: 2, leap: 2 },
    6: { norm: 5, leap: 5 },
    7: { norm: 0, leap: 0 },
    8: { norm: 3, leap: 3 },
    9: { norm: 6, leap: 6 },
    10: { norm: 1, leap: 1 },
    11: { norm: 4, leap: 4 },
    12: { norm: 6, leap: 6 }

}
export const remainder_code = {
    100: 4,
    200: 2,
    300: 0,
    0: 6

}
export const day_code = {
    1: { Day: 'Sunday' },
    2: { Day: 'Monday' },
    3: { Day: 'Tuesday' },
    4: { Day: 'Wednesday' },
    5: { Day: 'Thursday' },
    6: { Day: 'Friday' },
    0: { Day: 'Saturday' }
}

//  in case if month is january or februarythen we will have to consider the leap year code .
export default function calculate_day(date) {
    const isLeap = (year) => {
        return (year % 400 || (year % 100 != 0 && year % 4 == 0));
    };

    // converting from string to int
    const month = parseInt(date.substring(5, 7));   
    const year = parseInt(date.substring(0, 5));

    const year_left_part = parseInt(date.substring(0, 2)) * 100; // 2000

    const rem_code = year_left_part % 400;


    const month_code = !isLeap(year) ? month_table_code[month].norm : month_table_code[month].leap;
    const day = parseInt(date.substring(8, 10));
    const rem = remainder_code[rem_code];
    const year_right_part = parseInt(date.substring(2, 4)); // 20
    const number_of_leaps = parseInt(year_right_part / 4);
    


    const ans = day + month_code + rem + year_right_part + number_of_leaps;

    const day_c = ans % 7;
    const week_day = day_code[day_c].Day;   // checking the day from day_code table.

    return week_day;

}
