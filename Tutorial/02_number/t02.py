# 나누기
a = 4 / 2 # 파이썬 3 부터 정수 나누기 정수는 실수가 된다.
b = 10 / 3
print(a)
print(b)

# 나누기 (소수점버리기)
c = 4 // 2
d = 10 // 3
e = 20 // 3
print(c)
print(d)
print(e)

# 거듭제곱
f = 5 ** 2
print(f)

# 정수
g = int(3.3)
h = int(5/3)
print(g)
print(h)

# type
i = type(10.5)
j = type('str')
print(i)
print(j)

# 몫과 나머지 함께 구하기 (튜플)
k = divmod(5,2)
print(k)

quotient, remainder = divmod(5,2) # 구조분해와 비슷
print(quotient, remainder)

# 진수
0b110 # 2진수
0o10 # 8진수
0xf2 # 16진수

# 실수
l = 4.3-2.7
print(l) #1.59999... 실수는 오차발생

m = float(2)
print(m)