var containsDuplicate = (nums) => {
  for (let right = 0; right < nums.length; right++)
    for (let left = 0; left < right; left++) {
      const isDuplicate = nums[left] === nums[right];
      if (isDuplicate) return true;
    }
};

return false;
