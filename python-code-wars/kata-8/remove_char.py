# def remove_char(string: str) -> str:
#     return string[slice(1, -1)]


def remove_char(string: str) -> str:
    return string[1:-1]


print(remove_char("abbba"))
