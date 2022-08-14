sample = [1, 1, 2, 3, 3, 3, 5, 6, 6, 9, 0]

a = list(set(sample))
print(a)  # [0, 1, 2, 3, 5, 6, 9]

b = [*{*sample}]
print(b)  # [0, 1, 2, 3, 5, 6, 9]

c = list(dict.fromkeys(sample))
print(c)  # [1, 2, 3, 5, 6, 9, 0]

d = [*dict.fromkeys(sample)]
print(d)  # [1, 2, 3, 5, 6, 9, 0]

e = [*dict(zip(sample, sample))]
print(e)  # [1, 2, 3, 5, 6, 9, 0]
