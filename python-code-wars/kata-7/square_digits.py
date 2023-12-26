def square_digits(number: int) -> int:
    return int("".join(str(int(number) ** 2) for number in str(number)))


print(square_digits(3212))  # 811181
