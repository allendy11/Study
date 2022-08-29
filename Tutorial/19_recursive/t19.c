#include <stdio.h>

int factorial(int);
int main()
{
  int result = factorial(5);
  printf("%d\n", result);
}
int factorial(int n)
{
  if (n = 1)
  {
    return 1;
  }
  return n * factorial(n - 1);
}