#include <stdio.h>

int main()
{
  // 선언, 할당
  int a = 20;
  int *ptr;
  ptr = &a; //  & 는 주소를 가르킨다.

  printf("a : %d\n", a);   // 20
  printf("&a : %d\n", &a); // 주소값은 계속 바뀐다
  printf("ptr : %d\n", ptr);
  printf("*ptr : %d\n", *ptr); // 20
  printf("\n");

  // 재할당
  int b = 10;
  int c = 20;
  int *ptr2;

  ptr2 = &b;
  printf("%d\n", *ptr2); // 10
  ptr2 = &c;
  printf("%d\n", *ptr2); // 20
  printf("\n");

  // 재할당-값의 변경
  int *ptr3;
  printf("%d\n", *ptr); // 20 -> 아래에서 할당했지만 c값이 담기게 된다.

  ptr3 = &c;
  *ptr3 = 50;
  printf("%d\n", c); // 50 -> 원본 값을 변경한다.

  // 포인터의 포인터
  int d = 20;
  int *ptr_d;
  ptr_d = &d;
  int **ptr_ptr;
  ptr_ptr = ptr_d;

  printf("d: %d\n", d);
  printf("&d: %d\n", &d);

  printf("ptr: %d\n", ptr);
  printf("&ptr: %d\n", &ptr);

  printf("ptr_ptr: %d\n", ptr_ptr);     // = &ptr
  printf("*ptr_ptr: %d\n", *ptr_ptr);   // = ptr = &d
  printf("**ptr_ptr: %d\n", **ptr_ptr); // = d = 20 = *ptr
}