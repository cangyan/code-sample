class Test:
    name = "张三"

    def __init__(self) -> None:
        print(self.name)
        self.name = "李四"
        print(self.name)
        print(Test.name)
        print(Test.name == self.name)


Test.name = '王五'
Test()
