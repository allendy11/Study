#include <stdio.h>
#include <string.h>
int main()
{
  int arr[5] = {1, 2, 3, 4, 5};
  int len = sizeof(arr) / sizeof(int);

  // [1]
  printf("[1] ");
  for (int i = 0; i < len; i++)
  {
    printf("%d ", arr[i]);
  }
  printf("\n");

  // [2] 주소값 참조
  printf("[2] ");
  for (int i = 0; i < len; i++)
  {
    printf("%d ", &arr[i]);
  }
  printf("\n");

  // [3] 주소값 참조 (다른 표현)
  printf("[3] ");
  for (int i = 0; i < len; i++)
  {
    printf("%d ", arr + i);
  }
  printf("\n");

  // [4] 포인터
  printf("[4] ");
  for (int i = 0; i < len; i++)
  {
    printf("%d ", *(arr + i));
  }
  printf("\n");

  // [5] 포인터 2
  printf("[5] ");
  int *ptr = arr;
  for (int *ptr2 = arr; ptr2 < arr + 5; ptr2++)
  {
    printf("%d ", *ptr2);
  }
  printf("\n");

  // [6] 포인터 3
  printf("[6] ");
  for (int i = 0; i < len; i++)
  {
    printf("%d ", *(ptr + i));
  }
  printf("\n");
  // [7] 포인터 4
  printf("[7] ");
  for (int i = 0; i < len; i++)
  {
    printf("%d ", ptr[i]);
  }
  printf("\n");
  // [8] 포인터 5
  printf("[8] ");
  for (int i = 0; i < len; i++)
  {
    printf("%d ", i[ptr]);
  }
  printf("\n");

  // test
  // for (int arr; arr < arr + 5; arr++)
  // {
  //   printf("%d ", *(arr));  // 에러 : 이렇게는 안된다.
  // }
}

// 다음과 같은 등식이 성립된다.
// int *ptr = arr;
// arr[i] == *(arr + i) == ptr[i] == *(ptr + i) == *(i + ptr) == i[ptr]