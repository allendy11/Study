/*
[파일 쓰기]

비교
fprintf(fp, 서식, 값)
  eg) fprintf(fp, "%s\n", String)
  ascii형태로 1바이트마다 저장, 메모리 많이 먹는다.

fputs(버퍼, fp)
  eg) fputs(String, fp)

fwrite(버퍼, 쓰기크기, 쓰기횟수, fp )
  eg) fwrite(String, strLen(String), 1, fp)
  파일을 쓰는크기 = 쓰기크기 * 쓰키횟수
*/

/*
[파일 일기]

비교
fscanf(fp, 서식, 값)

fgets(버퍼, 버퍼크기,  fp)
  \n 까지 읽고 종료 즉, 한줄만 읽는다.

fread(버퍼, 읽기크기, 읽기횟수, fp)
  fread(buffer, sizeof(buffer), 1, fp)
  \n 과 상관없이 지정된 크기만큼읽게 된다.
  읽는크기 = 읽기크기 * 읽기 횟수

*/

/*
서식을 이용하는 경우 : fprintf, fscanf

쓰기/읽기 횟수가 필요한경우 : fwrite, fread

읽기> fgets vs fread
\n 에 의해 종료가 되는지 차이 즉 한줄만 읽을수 있는지 차이이다.

쓰기> fput vs fwrite
읽기와는 다르게 \n 에 좌우되지 않는다.
현재 알고있는 지식으로는 큰차이 없는듯