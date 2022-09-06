#include <stdio.h>

int main()
{
  int a = 5;
  int b = 3;
  int sum = a + b;
  int sub = a - b;
  int mul = a * b;
  int div = a / b;
  int res = a % b;
  printf("%d + %d = %d\n", a, b, sum);
  printf("%d - %d = %d\n", a, b, sub);
  printf("%d * %d = %d\n", a, b, mul);
  printf("%d / %d = %d\n", a, b, div);
  printf("%d %% %d = %d\n", a, b, res);
}
/*
바이트(byte) = 컴퓨터에서 데이터를 처리하는 가장 작은 단위 ( = 8비트)
자료형 : 정수형 , 실수형
정수형
  char (1byte) - 문자
  short (2byte)
  long (4byte)
  long long (8byte)
  int (과거엔 시스템에 따라서 자동 결정 -> 현재는 long) (4byte)

실수형
  float (4byte)
  double (8byte)

unsigned, signed

void: no return
bool: true/false (=byte)
*/