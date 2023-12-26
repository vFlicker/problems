from typing import List, Union

InputList = List[Union[int, str]]
FilteredList = List[int]


def filter_list(list: InputList) -> FilteredList:
    return [item for item in list if isinstance(item, int)]


print(filter_list([1, 2, "a", "b"]))  # [1,2]
