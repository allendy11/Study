// exit(0);

#include <stdio.h>
#include <stdlib.h>

int main()
{
  int sum = 0;

  for (int i = 0; i < 5; i++)
  {
    int n;

    scnaf("%d", &n);

    if (n <= 0)
    {
      printf("input error\n");
      exit(0);
    }

    sum += n;
  }

  printf("%d\n", sum);
}