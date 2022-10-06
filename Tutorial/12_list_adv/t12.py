# 리스트 응용

# 요소 추가 append
from msilib import sequence


a = [1,2,3]
len(a) # 3
a.append(4)
print(a) # [1,2,3,4]
len(a) # 4

# 리스트 추가
a = [1,2,3]
b = [4,5]
a.append(b)
print(a) # [1,2,3,[4,5]]

# 리스트 확장 extend
a = [1,2,3]
b = [4,5]
a.extend(b)
print(a) # [1,2,3,4,5]

# 특정 인덱스에 요소 추가 insert
a = [1,2,3]
a.insert(2,10)
print(a) # [1,2,10,3]

a.insert(0,0)
print(a) # [0,1,2,10,3]

a.insert(len(a), 20)
print(a) # [0,1,2,10,3,20]

a.insert(1,[6,7])
print(a) # [0,[6,7],1,2,10,3,20]

a[1:1] = [[8,9]
print(a) # [0,8,9,[6,7],1,2,10,3,20]

# 요소 삭제 remove , pop , del
a = [10,20,30,40,50]
a.remove(20)
print(a) # [10,30] // 값을 찾아서 제거 // 동일한 값이 있다면 앞의 값을 제거

a = [10,20,30,40,50]
a.pop()
print(a) # [10,20,30,40]
a.pop(2)
print(a) # [10,20,40] // 인덱스를 찾아서 제거 // 제거된 요소 반환

a = [10,20,30,40,50]
del a[2]
print(a) # [10,20,40,50]

# 특정값의 인덱스
a = [10,20,30,40,50]
a.index(20) # 1

# 특정값의 개수 
a = [10,20,30,40,20,50,20]
a.count(20) # 3

# 리스트 순서 뒤집기
a.reverse()

# 리스트 정렬
a.sort() == a.sort(reverse=False) # 오름 차순
a.sort(reverse=True) # 내림 차순
# sort vs sorted
a = [3,5,4,1,2]
a.sort()
print(a) # [1,2,3,4,5] 값을 변경

a = [3,5,4,1,2]
b = sorted(a)
print(a) # [3,5,4,1,2]  // 원본 변경x // 새로운 배열 반환
print(b) # [1,2,3,4,5]

# 리스트 삭제
a.clear()

# 슬라이스 사용
a = [1,2,3]
a[len(a):] = [5,6]
print(a) # [1,2,3,5,6] // 리스트 범위를 벗어난 인덱스 -> 마지막 인덱스

# if 문
# 다른 언어에서는 길이를 확인하여 리스트의 존재를 알수있다.
if len(seq)
if not len(seq)

# 하지만 파이썬에서는 리스트 그 자체의 존재를 확인가능하며 이를 권장한다.
if seq
if not seq