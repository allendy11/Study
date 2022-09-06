#include <stdio.h>

void swap(int x, int y)
{
  int temp = x;
  x = y;
  y = temp;
}
void swap2(int *x, int *y)
{
  int temp = *x;
  *x = *y;
  *y = temp;
}
int main()
{
  int a, b;
  scanf("%d%d", &a, &b);
  swap(a, b);
  printf("%d %d\n", a, b); // 2 ,3 -> 바뀌지 않는다.

  swap2(&a, &b);
  printf("%d %d\n", a, b); // 3 ,2 -> 바뀐다.
}

// call-by-value
// vall-by-reference