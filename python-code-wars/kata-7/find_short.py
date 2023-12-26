def find_short(words: str) -> int:
    return min([len(word) for word in words.split(" ")])


print(find_short("bitcoin take over the world maybe who knows perhaps"))  # 3
