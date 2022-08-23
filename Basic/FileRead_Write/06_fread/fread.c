#include <stdio.h>

int main()
{
  char buffer[34] = {
      0,
  };

  FILE *fp = fopen("names.dmp", "r");

  // fgets(buffer, sizeof(buffer), fp);

  fread(buffer, sizeof(buffer), 1, fp);

  printf("%s\n", buffer);

  fclose(fp);
}

/*
버퍼를 0으로 초기화 해야하는 이유
이전까지 메모리에 남아있던 값이 그대로 들어가게 되어 원치않는 값이 생성
초기화를 함으로써 null 값이 남게 되고 온전히 문자가 들어가게된다.

fgets 와는 다르게 줄바꿈이 있어도 온전히 모든 문자를 받아온다.

*/