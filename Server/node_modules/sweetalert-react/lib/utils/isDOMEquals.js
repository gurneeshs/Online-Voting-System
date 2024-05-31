"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDOMEquals;
/**
 * Determinate whether dom1 and dom2 is the same dom or not.
 *
 * @param  {HTMLElement}  dom1
 * @param  {HTMLElement}  dom2
 * @return {Boolean}
 */
function isDOMEquals(dom1, dom2) {
  return dom1 === dom2;
}