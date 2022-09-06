#include <stdio.h>

int main()
{
  int a, b;
  printf("Insert a: ");
  scanf("%d", &a);
  printf("Insert b: ");
  scanf("%d", &b);
  int sum = a + b;
  int sub = a - b;
  int mul = a * b;
  int div = a / b;
  int res = a % b;

  printf("%d + %d = %d\n", a, b, sum);
  printf("%d - %d = %d\n", a, b, sub);
  printf("%d * %d = %d\n", a, b, mul);
  printf("%d / %d = %d\n", a, b, div);
  printf("%d %% %d = %d\n", a, b, res);
}