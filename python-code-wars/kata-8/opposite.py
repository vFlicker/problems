from typing import Union

Num = Union[int, float]


def opposite(number: Num) -> Num:
    return -number


print(opposite(-3.1458))
