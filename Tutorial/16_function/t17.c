#include <stdio.h>
int itemCnt = 0;
int money = 3000;
int plus(int a, int b)
{
  return a + b;
}
int buyItem(int cost, int cnt)
{
  if (money < cost)
    return -1;
  itemCnt += cnt;
  money -= cost * cnt;
  printf("Buy item\n");
  printf("item: %d\n", itemCnt);
  printf("change: %d\n", money);
  return 0;
}
int main() // main 함수는 return 0 자동으로 설정된다
{
  int a;
  a = printf("aaa\n");
  printf("%d\n", a);
  int sum = plus(3, 5);
  printf("%d\n", sum);

  int result = buyItem(1000, 2);
  if (result - 1)
  {
    printf("You don't have enough money");
  }
}
