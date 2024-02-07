from typing import List

# message_template = {
#     0: lambda names: "no one likes this",
#     1: lambda names: f"{names[0]} likes this",
#     2: lambda names: f"{names[0]} and {names[1]} like this",
#     3: lambda names: f"{names[0]}, {names[1]} and {names[2]} like this",
#     4: lambda names: f"{names[0]}, {names[1]} and {len(names) - 2} others like this",
# }


# def likes(names: List[str]) -> str:
#     num_likes = len(names)
#     message_function = message_template.get(num_likes, message_template[4])
#     return message_function(names)


def likes(names: List[str]) -> str:
    NUM_MESSAGE_TEMPLATE = {
        0: "no one likes this",
        1: "{} likes this",
        2: "{} and {} like this",
        3: "{}, {} and {} like this",
        4: "{}, {} and {others} others like this",
    }

    num_likes = len(names)
    others_people_likes = num_likes - 2
    message_template_index = min(4, num_likes)

    return NUM_MESSAGE_TEMPLATE[message_template_index].format(
        *names[:3],
        others=others_people_likes,
    )


print(likes(["Alex", "Jacob", "Mark", "Max"]))
