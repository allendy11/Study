#include <stdio.h>

int main()
{
  char s1[10];
  int num1;

  // 파일텍스트 받기
  FILE *fp = fopen("hello.txt", "r");

  fscanf(fp, "%s %d", s1, &num1);

  // 입력값을 받기
  // fscanf(stdin, "%s %d", s1, &num1);

  printf("%s, %d\n", s1, num1);

  fclose(fp);

  return 0;
}

/*
fscanf : 파일포인터를 받는것을 제외하고 scanf 와 같다고 볼수있다.
*/