/* eslint-disable prettier/prettier */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    } else if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const new_array = numbers.map((price: number): number => price * 3);
    return new_array;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((word) => parseInt(word) || 0);
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
     return amounts.map((word) => {
        const num = parseInt(word.replace("$", ""), 10);
        return isNaN(num) ? 0 : num;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filtered = messages.filter((value) => !value.endsWith("?"));
    const values = filtered.map((value: string): string => {
        if (value.endsWith("!")) {
            return value.toUpperCase();
        }
        return value;
    });
    return values;
};
/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let sum = 0;
    words.map((a_word): void => {
        if (a_word.length < 4) {
            sum += 1;
        }
    });
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const valid = ["red", "blue", "green"];
    return (
        colors.length === 0 || colors.every((color) => valid.includes(color))
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
//new comment to push
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce((acc, curr) => acc + curr, 0);
    const numbersString = addends.map(String).join("+");
    return `${sum}=${numbersString}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    let foundNegative = false;
    const result: number[] = [];

    values.map((num) => {
        if (!foundNegative && num < 0) {
            result.push(num);
            result.push(sum);
            foundNegative = true;
        } else {
            sum += num;
            result.push(num);
        }
    });

    if (!foundNegative) {
        result.push(sum);
    }

    return result;
}
