# def high_and_low(string: str) -> str:
#     splitNumbers = string.split(" ")
#     numbers = list(map(lambda number: int(number), splitNumbers))
#     return f"{max(numbers)} {min(numbers)}"


def high_and_low(string: str) -> str:
    numbers = [int(number) for number in string.split(" ")]
    return f"{max(numbers)} {min(numbers)}"


print(high_and_low("1 2 3 4 5"))  # return "5 1"
