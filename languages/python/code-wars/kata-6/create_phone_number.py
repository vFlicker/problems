from typing import List

# def create_phone_number(numbers: List[int]) -> str:
#     stringed_numbers = list(map(str, numbers))

#     area_code = "".join(stringed_numbers[:3])
#     first_three = "".join(stringed_numbers[3:6])
#     last_four = "".join(stringed_numbers[6:10])

#     return f"({area_code}) {first_three}-{last_four}"


def create_phone_number(numbers: List[int]) -> str:
    stringed_numbers = "".join(map(str, numbers))

    area_code = stringed_numbers[:3]
    first_three = stringed_numbers[3:6]
    last_four = stringed_numbers[6:10]

    return f"({area_code}) {first_three}-{last_four}"


print(create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))  # "(123) 456-7890"
