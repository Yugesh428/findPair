function findPair(nums, target) {
  let found = false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(`Pair found (${nums[i]}, ${nums[j]})`);
        found = true;
        return;
      }
    }
  }

  if (!found) {
    console.log("Pair not found.");
  }
}

let nums1 = [8, 7, 2, 5, 3, 1];
let target1 = 10;
findPair(nums1, target1);

let nums2 = [5, 2, 6, 8, 1, 9];
let target2 = 12;
findPair(nums2, target2);
