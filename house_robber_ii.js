var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    var normal = rob_memo(nums, 0, Array(nums.length-1).fill(-1));
    var shifted_arr = rob_memo([nums[nums.length -1]].concat(nums.slice(0, nums.length-1)),0, Array(nums.length-1).fill(-1));
    return Math.max(normal, shifted_arr)
};

var rob_memo = (ns, i, cache) => {
    if (i >= ns.length -1) return 0;
    if (cache[i] > -1) return cache[i];
    cache[i] = Math.max(rob_memo(ns, i+1, cache), 
                        ns[i] + rob_memo(ns, i+ 2, cache));
    return cache[i];
};
