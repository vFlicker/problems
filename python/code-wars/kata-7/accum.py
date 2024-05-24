def accum(string: str) -> str:
    accumulatedLetters = []

    for index, letter in enumerate(string.lower()):
        accumulatedLetter = letter.upper() + letter * index
        accumulatedLetters.append(accumulatedLetter)

    return "-".join(accumulatedLetters)


print(accum("abCd"))  # "A-Bb-Ccc-Dddd"
