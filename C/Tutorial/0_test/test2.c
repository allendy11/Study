#include <stdio.h>

int main()
{
  int arr[2][3] = {
      {1, 2, 3},
      {4, 5, 6}};
  int(*ptr)[3] = arr;

  // for (int i = 0; i < 2; i++)
  // {
  //   for (int j = 0; j < 3; j++)
  //   {
  //     printf("%d ", ptr[i][j]);
  //   }
  //   printf("\n");
  // }
  // for (int(*row)[3] = arr; row < arr + 2; row++)
  // {
  //   for (int *col = *row; col < *row + 3; col++)
  //   {
  //     printf("%d ", *col);
  //   }
  //   printf("\n");
  // }

  // int(*row)[3] = arr;
  // int *col = *row;
  // printf("%d\n", (*row)[0]);
  // printf("%d\n", (*row)[1]);
  // printf("%d\n", (*row)[2]);
  // printf("%d\n", (*row)[3]);
  // printf("%d\n", (*row)[4]);
  // printf("%d\n", (*row)[5]);

  char str[] = "Hello";
  char *ptr_str = "Hello";
  printf("%s\n", &str[0]);
  printf("%s\n", str);
  printf("%s\n", ptr_str);
}
/*
int arr[3] = {1,2,3};
int *ptr = arr;


int *ptr = arr[3]

*/