// while / do while
#include <stdio.h>

int main()
{
  int i = 10;
  int j = 10;
  while (i < 10)
  {
    printf("while\n");
    printf("%d\n", i);
    i++;
  }
  do
  {
    printf("do while\n");
    printf("%d\n", j);
    i++;
  } while (j < 10);
}

// do while 은 한번은 실행한다.