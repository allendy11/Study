// switch / goto
#include <stdio.h>

int main()
{
  int choice;
makeChoice:
  printf("new game : 1\n");
  printf("open : 2\n");
  printf("setting : 3\n");
  printf("credit : 4\n");

  scanf("%d", &choice);
  // if (choice == 1)
  // {
  //   printf("new game\n");
  // }
  // else if (choice == 2)
  // {
  //   printf("open\n");
  // }
  // else if (choice == 3)
  // {
  //   printf("setting\n");
  // }
  // else if (choice == 4)
  // {
  //   printf("credite\n");
  // }
  // else
  // {
  //   printf("wrong number!!!\n");
  // }
  switch (choice)
  {
  case 1:
    printf("new game\n");
    break;
  case 2:
    printf("open\n");
    break;
  case 3:
    printf("setting\n");
    break;
  case 4:
    printf("credite\n");
    break;
  default:
    printf("wrong number!!!\n");
    goto makeChoice;
    break;
  }
}