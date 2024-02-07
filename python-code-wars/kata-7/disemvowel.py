# import re


# def disemvowel(sentence: str) -> str:
#     replacedString = re.sub("[aeiou]", "", sentence, flags = re.IGNORECASE)
#     return replacedString


def disemvowel(string: str) -> str:
    return "".join(letter for letter in string if letter.lower() not in "aeiou")


print(disemvowel("This website is for losers LOL!"))  # "Ths wbst s fr lsrs LL!"
