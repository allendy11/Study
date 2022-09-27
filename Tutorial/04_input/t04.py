# input() # 입력값 출력

# x = input('insert x: ')
# y = input('insert y: ')
# print('x y: ',x,y) # 띄어쓰기 자동

# 숫자를 입력받아서 합을 구하기
# a = input('num a: ') # 10
# b = input('num b: ') # 20
# print('a+b: ', a+b) # 1020 (문자열로 인식) input으로 받는 값은 항상 문자열이다.

# c = int(input('num c: ')) # 10
# d = int(input('num d: ')) # 20
# print('c+d: ', c+d) # 30

# 입력값을 한번에 여러개 받기
# a, b = input('insert a b: ').split()
# print(a, b)
# c, d = input('insert c d: ').split() # 10 20
# print(c+d) # 1020

# map 을 이용하여 여러개의 입력값 타입 변경
e, f = map(int, input('insert e f: ').split()) # 10 20
print(e+f) # 30

# split()안의 인자에 따라 구분 가능 