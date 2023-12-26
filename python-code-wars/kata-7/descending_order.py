# def descending_order(number: int) -> int:
#     numbers = list(str(number))
#     numbers.sort(reverse=True)
#     return int("".join(numbers))


def descending_order(number: int) -> int:
    numbers = sorted(str(number), reverse=True)
    return int("".join(numbers))


print(descending_order(145263))  # 654321
