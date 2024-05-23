# def digital_root(number: int) -> int:
#     if number < 10:
#         return number

#     result = 0
#     while number > 0:
#         current_digit = number % 10
#         result += current_digit
#         number = number // 10

#     return digital_root(result)


# def digital_root(number: int) -> int:
#     if number < 10:
#         return number

#     return digital_root(sum(map(int, str(number))))


def digital_root(number: int) -> int:
    if number < 10:
        return number

    result = sum(int(current_number) for current_number in str(number))

    return digital_root(result)


print(digital_root(52241128678657035))  # 9
