from typing import List


def array_diff(first_array: List[int], second_array: List[int]) -> List[int]:
    # We use set because O complexity will O(1), not O(N)
    second_set = set(second_array)
    return [number for number in first_array if number not in second_set]


print(array_diff(list(range(1000)), [1, 10, 500, 1000, 500, 400, 100, 300, 400, 20, 2]))
