#include <stdio.h>
int main()
{
  printf("Hello, World! \n");

  // 정수 출력
  printf("%d %d %d \n", 2, 3, 4);

  // 실수 출력
  printf("%f \n", 3.14);       // 3.140000
  printf("%.2f \n", 3.141592); // 3.14

  // 실수 출력 (지수)
  printf("%g \n", 3.141592);                    // 3.14159
  printf("%.3g \n", 1543452452343.23452141592); // 31.54e+12

  // 문자 출력
  printf("%c %c %c\n", 97, 'b', 'c'); // a b c

  // 문자열 출력
  printf("%s\n", "Hello"); // Hello
}