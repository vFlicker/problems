from typing import List

# def find_it(numbers: List[int]) -> int:
#     number_counts = {}

#     for number in numbers:
#         count = number_counts.get(number, 0)
#         number_counts[number] = count + 1

#     for key, value in number_counts.items():
#         if value % 2 == 1:
#             return key


def find_it(numbers: List[int]) -> int:
    number_counts = set()

    for number in numbers:
        if number in number_counts:
            number_counts.remove(number)
        else:
            number_counts.add(number)

    return number_counts.pop()


print(find_it([1, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 3, 2, 2, 1]))  # 4
