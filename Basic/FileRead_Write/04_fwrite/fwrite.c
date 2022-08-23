#include <stdio.h>
#include <string.h>

int main()
{
  char *s1 = "Hello, world";

  FILE *fp = fopen("hello.txt", "w");

  // fprintf(fp, "%s", "Hello, world!");
  // fputs("Hello, world!", fp);
  fwrite(s1, strlen(s1), 1, fp);

  // fwrite(s1, strlen(s1), stdout);

  fclose(fp);
}