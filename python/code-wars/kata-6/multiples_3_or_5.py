def multiples_3_or_5(number: int) -> int:
    return sum(
        current_number
        for current_number in range(1, number)
        if current_number % 3 == 0 or current_number % 5 == 0
    )


print(multiples_3_or_5(10))
