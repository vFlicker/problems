from typing import List


def find_outlier(integers: List[int]) -> int:
    evenCount = 0
    evenInteger = 0
    oddInteger = 0

    for integer in integers:
        if integer % 2 == 0:
            evenCount += 1
            evenInteger = integer
        else:
            oddInteger = integer

    return evenInteger if evenCount == 1 else oddInteger


print(find_outlier([2, 4, 6, 8, 10, 3]))  # 3
