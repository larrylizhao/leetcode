/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  const win = [2];
  const lose = [1, 3];

  for (let number = 4; number < N + 1; number++) {
    const mods = [1];
    //取得可以被当前数字整除的数
    for (let j = number - 1; j > 1; j--) {
      if (number % j === 0) {
        mods.push(j);
      }
    }
    const len = win.length;
    for (const k of mods) {
      //如果当前数字可以转化得到必输的数字，则该数字必赢
      if (lose.includes(number - k)) {
        win.push(number);
        break;
      }
    }
    //否则该数字必输
    if (len === win.length) {
      lose.push(number);
    }
  }

  //检查给定数字是否在必赢的数组中
  return win.includes(N);
};

console.log(divisorGame(8));
