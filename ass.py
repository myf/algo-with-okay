def coinChange(coins, amount):
    x = coin_recur(coins, amount, {})
    return x if x < int('inf') else -1 

def coin_recur(coins, amount, memo):
    if amount < 0:
        return float('inf')
    if amount == 0:
        return 0
    if amount not in memo:
        memo[amount] = 1 + min([coin_recur(coins, amount - x, memo) for x in coins])
    return memo[amount]
        
print(coinChange([1,2,5], 100))
