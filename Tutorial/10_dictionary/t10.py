# dictinary 딕셔너리 

# 선언
## {'health': 490, 'mana': 334, 'melee': 550, 'armor': 18.72}
lux = dict(health =490, mana = 334, melee=550, armor=18.72) # 키=값 형식
lux = dict(zip(['health','mana','melee','armor'],[490,334,550,18.72])) # 키 리스트 와 값 리스트
lux = dict([('health', 490),('mana',334),('melee', 550),('armor', 18.72)]) # (키,값)형식의 튜플
lux = dict({'health': 490, 'mana': 334, 'melee': 550, 'armor': 18.72}) # 중괄호

# 할당
lux['health'] = 550

# 생성
lux['speed'] = 5 # 없는 키값을 불러오는 경우엔 에러 

# 키가 있는지 확인
'health' in lux # True


# 키 개수
len(lux) # 4
len({'health': 490, 'mana': 334, 'melee': 550, 'armor': 18.72}) # 4