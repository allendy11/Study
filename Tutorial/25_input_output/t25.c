#include <stdio.h>

int main()
{
  FILE *in, *out, *add; // 스트림
  int n;

  in = fopen("input.txt", "r");   //(1-1) read //(5-1) 존재하지 않는 파일을 읽게되면 null = 0 을 반환
  out = fopen("output.txt", "w"); //(2-1) write
  add = fopen("output.txt", "a"); //(4-1) add

  if (in == null)
  {
    printf("파일이 존재하지 않습니다.");
    return; //(5-2) 파일이 존재하지 않는 경우 종료
  }
  fscanf(in, "%d", &n); //(1-2)
  printf("%d\n", n);    //(1-3)

  fprintf(out, "%d\n", n); //(2-2) 새로 생성(덮어씌어진다)
  fprintf(add, "%d\n", n); //(4-2) 추가

  // main 이 끝나면 자동으로 close()가 실행되지만 동시에 많은 파일을 열게되면 에러가 발생할수있으므로
  // 동시에 열린 파일을 갯수를 최소하 하도록 한다.
  fclose(in);  //(3-1)
  fclose(out); //(3-2)
  fclose(add); //(4-3)
}