# def is_isogram(string: str) -> bool:
#     char_count = {}

#     for letter in string.lower():
#         char_count[letter] = char_count.get(letter, 0) + 1

#     for count in char_count.values():
#         if count > 1:
#             return False
#     return True


# def is_isogram(string: str) -> bool:
#     seen_letters = set()

#     for letter in string.lower():
#         if letter in seen_letters:
#             return False
#         seen_letters.add(letter)

#     return True


def is_isogram(string: str) -> bool:
    return len(string) == len(set(string.lower()))


print(is_isogram("Dermatoglyphics"))  # True
print(is_isogram("moose"))  # False
