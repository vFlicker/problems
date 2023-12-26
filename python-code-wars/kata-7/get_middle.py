def get_middle(string: str) -> str:
    length = len(string)
    middle_index = length // 2

    if length % 2 == 0:
        return string[middle_index - 1:middle_index + 1]
    else:
        return string[middle_index]


print(get_middle("test"))  # "es"
print(get_middle("testing"))  # "t"
