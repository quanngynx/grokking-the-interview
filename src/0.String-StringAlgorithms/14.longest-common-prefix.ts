/**
 * Finds the longest common prefix among an array of strings.
 * Requirements:
 * - 1 <= strs.length <= 200
 * - 0 <= strs[i].length <= 200
 * - strs[i] consists of only lowercase English letters.
 * @param strs - The array of strings to find the longest common prefix of.
 * @returns The longest common prefix of the strings.
 */

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix[j] === strs[i][j]
    ) {
      j++;
    }
    prefix = prefix.slice(0, j);
    if (prefix === "") return "";
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
