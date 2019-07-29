from typing import *
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        return self.ll(nums, -99, 0, {})

    def ll(self, nums, prev, i, memo):
        if i == len(nums):
            return 0
        taken = 0
        if (prev,i) in memo:
            return memo[(prev, i)]
        else:
            if nums[i] > prev:
                taken = 1 + self.ll(nums, nums[i], i +1, memo)
            not_taken = self.ll(nums, prev, i + 1, memo)
            memo[(prev, i)] = max(taken, not_taken)
            return memo[(prev, i)]
        
        

if __name__ == "__main__":
    s = Solution()
    print(s.lengthOfLIS([10,9,2,5,3,7,101,18]))
    print(s.lengthOfLIS([1,2,3,4,5,6,7,1]))
        
