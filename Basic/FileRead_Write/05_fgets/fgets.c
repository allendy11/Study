#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
  char buffer[100];

  FILE *fp = fopen("names.dmp", "r");

  fgets(buffer, sizeof(buffer), fp);

  printf("%s\n", buffer);

  fclose(fp);

  return 0;
}

/*
줄바꿈이 있을 경우
/n 까지 읽게된다. 즉 한줄 만 읽는것이 가능
출력을 하게 되면 줄바꿈이 적용된다.
*/