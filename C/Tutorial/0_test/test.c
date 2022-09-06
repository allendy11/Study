#include <stdio.h>
#include <string.h>
int main()
{
  // [strlen]
  // char s1[10] = "Hello";
  // char *s2 = "Hello";
  // char s3[] = "Hello";

  // printf("%s\n", s1); // Hello
  // printf("%s\n", s2); // Hello

  // printf("%d\n", sizeof(s1)); // 10
  // printf("%d\n", sizeof(s2)); // 8
  // printf("%d\n", sizeof(s3)); // 6

  // printf("%d\n", sizeof(s1) / sizeof(char)); // 10
  // printf("%d\n", sizeof(s2) / sizeof(char)); // 8
  // printf("%d\n", sizeof(s3) / sizeof(char)); // 6

  // printf("%d\n", strlen(s1)); // 5
  // printf("%d\n", strlen(s2)); // 5
  // printf("%d\n", strlen(s3)); // 5

  // printf("%d\n", sizeof(char)); // 1

  // [strcmp]
  printf("%d\n", strcmp("aaa", "zzzz"));

  char s1[10] = "Hello";
  char *s2 = "Hello";
  printf("%d\n", strcmp(s1, s2));
}

/*
char
  char 의 크기는 1
  그래서 문자열의 길이는
  sizeof(String)/sizeof(char) = sizeof(String) 성립
  길이가 6인 이유는 \0 을 포함하기 때문

strlen
  문자열의 길이를 구하는 함수
  \0 을 제외하고 순수하게 문자열의 길이를 구하므로 5 가 출력된다.
*/

/*
strcmp
  ASCII 코드 값을 비교
  앞에서 부터 한글자씩 비교
*/