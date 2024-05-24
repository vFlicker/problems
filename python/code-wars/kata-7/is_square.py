from math import sqrt

# def is_square(number: int) -> bool:
#     if number < 0:
#         return False
#     return sqrt(number).is_integer()


def is_square(number: int) -> bool:
    return number > -1 and sqrt(number).is_integer()


print(is_square(4))  # True
print(is_square(-1))  # False
