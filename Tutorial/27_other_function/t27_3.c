// 난수

#include <stdlib.h>
#include <stdio.h>
#include <time.h>

int main()
{
  // seed
  // time(NULL); // 1970.01.01 00:00:00 으로 부터 지난 시간 초단위

  srand(time(NULL));
  for (int i = 1; i <= 10; i++)
  {
    printf("%d\n", rand() % 10 + 1);
  }
}
// 0 부터 a 까지 난수 생성 : rand()%(a+1)
// a 부터 b 까지 난수 생성 : rand()%(b-a+1) + a