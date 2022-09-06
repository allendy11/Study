#include <stdio.h>
#include <string.h>

int main()
{
  // 배열의 길이 strlen(array)
  char str[100] = "Hello";
  int len;
  len = strlen(str);
  printf("len: %d\n", len);

  // 배열의 복사 strcpy(new Array, old Array)
  char str1[] = "Hello";
  char str2[100];
  strcpy(str2, str1);
  printf("str2: %s\n", str2);

  // 배열의 연결 strcat(array, string)
  char str3[100] = "Hello";
  strcat(str3, "World");
  printf("str3: %s\n", str3);

  // 문자열 배열 비교 strcmp(array1, array2);
  char str4[] = "sample";
  char str5[] = "simple";

  int cmp = strcmp(str4, str5);
  printf("cmp: %d\n", cmp);
  // str1 < str2  -> 오름 차순 -> -1 반환
  // str1 > str2 -> 내림 차순 -> 1 반환
  // 같을 경우 0 반환
}