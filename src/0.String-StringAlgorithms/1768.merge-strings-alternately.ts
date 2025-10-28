function mergeAlternately(word1: string, word2: string): string {
  const word1Split = word1.split("");
  const word2Split = word2.split("");
  const merged: string[] = [];
  while (word1Split.length > 0 || word2Split.length > 0) {
    if (word1Split.length > 0) {
      merged.push(word1Split.shift());
    }
    if (word2Split.length > 0) {
      merged.push(word2Split.shift());
    }
  }
  return merged.join("");
}

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("abcd", "pq"));
console.log(mergeAlternately("abcd", "pqr"));
console.log(mergeAlternately("abcd", "pqrs"));
console.log(mergeAlternately("abcd", "pqrs"));