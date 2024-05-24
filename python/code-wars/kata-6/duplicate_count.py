def duplicate_count(text: str) -> int:
    dictionary = {}

    for symbol in text.lower():
        count = dictionary.get(symbol, 0)
        dictionary[symbol] = count + 1

    return len([value for value in dictionary.values() if value > 1])


print(duplicate_count("ABBcAa"))  # 2
