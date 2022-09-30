a=[]
a=[1,2,3]
a=['a','b','c']
a=['a',1,2]

b = list(range(10))
b = list(range(3,9,2))
b = list(range(15,0,-1))

# tuple
# 읽기 전용 리스트라 할수 있다. = 변경, 추가, 삭제 불가
c = (1,2,3,'a')
c = 1,2,3,'a'

# 요소가 하나인 튜플
d = (34,)
d = 34,

# tuple -> list, list -> tuple
e = 1,2,3
f = list(e) # [1,2,3]

e = [1,2,3]
f = tuple(list) # (1,2,3)

# unpacking
x = [1,2,3] | (1,2,3)
a,b,c = x # a=1,b=2,c=3
# *destruction 과 비슷하다

# packing -> 할당하는것을 말한다.
a = [1,2,3] | (1,2,3)
