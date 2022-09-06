#include <stdio.h>

int main()
{
  int arr[4] = {1, 2, 3, 4};
  int *ptr[4];

  for (int i = 0; i < 4; i++)
  {
    ptr[i] = &arr[i];
  }
  for (int i = 0; i < 4; i++)
  {
    printf("%d ", *ptr[i]);
  }
  printf("\n");
  //
  char strings[3][10] = {"Hello", "World", "Eclipse"};
  char *ptr_str[3];

  for (int i = 0; i < 3; i++)
  {
    ptr_str[i] = strings[i];
  }
  for (int i = 0; i < 3; i++)
  {
    printf("%s\n", ptr_str[i]);
  }
}