#include <stdio.h>
int main()
{
  printf("%d %d %d %d\n", sizeof(int), sizeof(char), sizeof(float), sizeof(double)); // 4 1 4 8

  int a = 3.14; // 정수형에 실수를 담을수 없다.
  char b = 10;  // 실수형에 정수를 담을수

  int c = 95;
  int d = 90;
  int e = 96;
  int sum = c + d + e;
  double avg = sum / 3;          // 93.000000
  double avg2 = (double)sum / 3; // 93.666667
  printf("%f\n", avg);
  printf("%f\n", avg2);
}