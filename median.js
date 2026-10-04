
let num1 = [1,2];
let num2 = [3,4]
function findMedianSortedArrays(nums1, nums2) {
 let num = [...nums1, ...nums2];
 let median = num[((num.length / 2))] + num[((num.length / 2) - 1)];
  console.log("num", num,"num[((num.length / 2))]",num[((num.length / 2) + 1)],"num[((num.length / 2) - 1)]",num[((num.length / 2) - 1)]);
  return (num.length % 2 === 0) ? (median/2) : Math.ceil(num.length / 2);
}

console.log("arrr",findMedianSortedArrays(num1,num2));