class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        i = 0
        while i < len(nums):
            print(i, nums, nums[i])
            if len(nums) == 1:
                break
            if len(set(nums)) == 1:
                break
            if nums[i] > 1:
                if set(nums[i:]) == {2}:
                    break
                nums.pop(i)
                nums.insert(len(nums), 2)
                
            elif nums[i] < 1:
                nums.pop(i)
                nums.insert(0, 0)
                i+=1          
            elif nums[i] == 1:
                i+=1
