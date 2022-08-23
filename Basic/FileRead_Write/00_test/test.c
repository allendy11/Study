#include <stdio.h>

int main()
{
  char s[] = "Hello";
  char *str = "Hello";

  printf("%s\n", s);   // Hello
  printf("%s\n", str); // Hello

  printf("%d\n", sizeof(s));
  printf("%d\n", sizeof(str));
}