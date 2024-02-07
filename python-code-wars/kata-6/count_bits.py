# def count_bits(number: int) -> int:
#     binary = format(number, "b")
#     return sum([int(number) for number in binary])


def count_bits(number: int) -> int:
    binary = format(number, "b")
    return binary.count("1")


print(count_bits(1234))
