
# 리스트 복사
a = [1,2,3]
b = a.copy()

# index 출력
## enumerate()
a = [30,50,40,10,20]
for index, value in enumerate(a):
  print(index) # 0,1,2,3,4
  print(value) # 30,50,40,10,20

for index, value in enumerate(a, start=1)
  print(index) # 1,2,3,4,5

##  range
for i in range(len(a)):
  print(a[i])

# min / max / sum
a = [30,50,40,10,20]
min(a) # 10
max(a) # 50
sum(a) # 150

# list-comprehension
a = [ i for i in range(10)]
print(a) # [0,1,2,3,4,5,6,7,8,9]

a = [i*j for i in range(2,5) for j in range(1,4)]
print(a) #[2*1,2*2,2*3, 3*1,3*2,3*3, 4*1,4*2,4*3]

a = [i for i in range(10) if i%2 ==0]
print(a) # [0,4,6,8]

# map
# a = list(map(함수, 리스트*)) #리스트* -> 반복 가능한 객체
a = [1.2, 2.5, 3.7, 4.6]
a = list(map(int, a))
print(a) # [1, 2, 3, 4]

a = list(map(str, a))
print(a) # ['1','2','3','4']


# input().split().map
a = input().split()
# 10 20 30 (입력)
print(a) # ['10','20','30']

a = list(map(int, a))
print(a) # [10,20,30]
b = map(int, a)
print(b) # <map object at 0x7febf1928970>

x,y,z = b
print(x,y,z) # 10,20,30