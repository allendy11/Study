#include <stdio.h>

int main()
{
  int p1[2] = {3, 4};

  typedef int Pair[2];
  Pair p2 = {3, 4};

  char *name = "Allen";
  printf("Name : %s\n", name);

  typedef char *String;
  String name2 = "Allen";
  prinft("Name: %s\n", name2)
}