#include <stdio.h>

int main()
{
  char s1[10];
  int num1;

  FILE *fp = fopen("./dummy/hello.txt", "r");
  fscanf(fp, "%s %d", s1, &num1);
  printf("%s, %d\n", s1, num1);
  fclose(fp);
}