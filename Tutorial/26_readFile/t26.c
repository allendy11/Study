#include <stdio.h>
// 텍스트 파일의 모든 문자읽기
int main()
{
  FILE *in = fopen("test.txt", "r");
  char ch;

  // case 1
  // while (!feof(in)) // eof: end of file 약자. 파일을 읽게되면 true를 반환 더이상 읽을수 없게 되면 false를 반환한다.
  // {
  //   fscanf(in, "%c", &ch);
  //   printf("%c", ch);
  // }

  // case2
  while (fscanf(in, "%c", &ch) != EOF)
  {
    printf("%c", ch);
  }
  printf("\n");
  fclose(in);
}