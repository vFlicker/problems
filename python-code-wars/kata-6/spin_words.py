def spin_words(sentence: str) -> str:
    return " ".join(
        word[::-1] if len(word) >= 5 else word for word in sentence.split(" ")
    )


print(spin_words("Hey fellow Warriors"))  # "Hey wollef sroirraW"
