/**
 * const alpha = Array.from(Array(26)).map((e, i) => i + 65);
 * const alphabet = alpha.map((x) => String.fromCharCode(x));
 * const numeric = Array.from(Array(10)).map((el, i) => i.toString());
 * I understand that it is more beautiful
 * But we can write this array once without using iteration
 */

const firstLine = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const secondLine = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const thirdLine = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "@"];
const fourthLine = ["z", "x", "c", "v", "b", "n", "m", ".", ".com", ".ru"];
const popularMails = ["gmail", "yahoo", "hotmail", "yandex", "msn", "orange", "comcast", "outlook", "mail", "gmx"];
export const inputHelperSymbols = firstLine.concat(secondLine, thirdLine, fourthLine, popularMails);
