class Cat:
    __init__(self):
        name = [1, 2, 3]

    def voice(self):
        return f"I am {self.name}"


class Cat2:
    name = "Cat"

    def voice(self):
        return f"I am {self.name}"


nika = Cat()
nika2 = Cat()

print(nika.name == nika2.name)
print(nika.voice is nika2.voice)
