from typing import *
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        return self.cc(amount, coins, 0, {})
    
    def cc(self, amount, coins, i,cache):
        if amount == 0:
            return 1
        if amount < 0 or i >= len(coins):
            return 0        
        if (amount, i) not in cache:
            cache[(amount, i)] = self.cc(amount - coins[i], coins, i, cache) +\
                    self.cc(amount, coins, i + 1, cache)

        return cache[(amount,i)]


    def cc2(self, amount, coins, i,cache): # cache only amount not i
        if amount == 0:
            return 1
        if amount < 0 or i >= len(coins):
            return 0        
        if amount not in cache:
            cache[amount] = self.cc(amount - coins[i], coins, i, cache) +\
                    self.cc(amount, coins, i + 1, cache)

        return cache[amount]
if __name__ == '__main__':
    x = Solution()
    print(x.change(500, [1,2,5]))

        
