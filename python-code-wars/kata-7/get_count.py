# import re

# def get_count(sentence: str) -> int:
#     res = re.findall("[aeiou]", sentence)
#     return len(res)


def get_count(sentence: str) -> int:
    return sum([1 for letter in sentence if letter in "aeiou"])


print(get_count("bcdfeghjklmnpqarstvwxz"))  # 2
