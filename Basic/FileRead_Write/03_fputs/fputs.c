#include <stdio.h>

int main()
{
  FILE *fp = fopen("hello.txt", "w");

  // fprintf(fp, "%s", "Hello, world!");

  fputs("Hello, world!\nand more", fp);

  // fputs("Hello, world!", stdout);

  fclose(fp);

  return 0;
}