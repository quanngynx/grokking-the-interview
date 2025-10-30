/**
 * Converts a Roman numeral string to an integer.
 * Requirements:
 * - 1 <= s.length <= 15
 * - s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * - It is guaranteed that s is a valid Roman numeral in the range [1, 3999].
 * @param s - The Roman numeral string to convert to an integer.
 * @returns The integer value of the Roman numeral string.
 */

/**
 * Approach: dictionary
 * 1. Create a record of Roman numeral characters to their integer values.
 * 2. Iterate through the string and add the value of the current character to the result.
 * 3. If the current character is less than the next character
 *    add the difference between the next character and the current character to the result 
 *    and skip the next character.
 *    else add the value of the current character to the result.
 * 4. Return the result.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function romanToInt(s: string): number {
    const romanToIntMap: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        const nextChar = s[i + 1];
        const current = romanToIntMap[currentChar];
        const next = romanToIntMap[nextChar];
        if (current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));