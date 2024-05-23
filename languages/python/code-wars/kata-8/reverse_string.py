# def solution(string: str) -> str:
#     reversedString = ""

#     for char in range(len(string) - 1, -1, -1):
#         reversedString += string[char]

#     return reversedString


def solution(string: str) -> str:
    return string[::-1]


print(solution("abc"))
