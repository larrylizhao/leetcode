/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 * 二分法解题思路：在 [max(nums), sum(nums)] 区间进行查找，给定假定的值，检查其分割次数是否满足m
 */
var splitArray = function(nums, m) {
  const n = nums.length;
  const low = max(nums);
  const high = sum(nums);
  //分割长度为1，则返回数组所有数字的和
  if (m === 1) {
    return high;
  }
  //分割长度等于数组长度则，返回数组中的最大值
  if (m === n) {
    return low;
  }

  return partition(nums, m, low, high);
};

//获取数组所有元素的和
function sum(nums) {
  return nums.reduce((pre, cur) => pre + cur);
}

//获取数组的最大值
function max(nums) {
  return nums.reduce((pre, cur) => Math.max(pre, cur));
}

//将数组进行m段分割
function partition(nums, m, low, high) {
  if (high - low <= 1) {
    return low;
  }
  let cuts = 0;
  let count = 0;
  const mid = Math.floor((low + high) / 2);
  for (const num of nums) {
    if (count + num >= mid) {
      cuts += 1;
      count = 0;
    }
    count += num;
  }
  cuts += 1;

  //如果分割次数大于m，则证明通过m次分割，无法使得最小和等于假定值，所以当前假设的数字偏小
  if (cuts > m) {
    return partition(nums, m, mid, high);
  }

  //如果分割次数小于m，则证明通过m次分割，可以得到更小的最小和，所以当前假设的数字偏大
  if (cuts <= m) {
    return partition(nums, m, low, mid);
  }

}

