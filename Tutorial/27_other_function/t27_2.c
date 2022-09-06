// sscanf, sprintf

#include <stdio.h>

int main()
{
  char str[] = "450";
  int n;

  sscanf(str, "%d", &n);
  printf("%d\n", n);

  int n2 = 460;
  char str2[100];

  sprintf(str2, "%d", n2);
  printf("%s\n", str2);
}