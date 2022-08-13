# def f(value, seq=[]):
#     seq.append(value)
#     return seq
#
#
# print(f(value=2))
# print(f(value=4))
# print(f(value=8))
# print(f(value=16))

def f(value, seq=None):
    if not seq:
        seq = []
    seq.append(value)
    return seq


print(f(value=2))
print(f(value=4))
print(f(value=8))
print(f(value=16))
