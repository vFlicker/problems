from typing import List


def positive_sum(numbers: List[int]) -> int:
    return sum(number for number in numbers if number > 0)
