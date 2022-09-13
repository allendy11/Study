// 다음과 같은 함수 정의에서 컴파일 오류가 나는 이률를 찾아보시오

void drawRectangle(int l, int r, int t, int b){};
void drowRectangle(int x = 0, int y = 9, int w, int h) {}

/*
problem 1.
매개변수의 디폴트값은 뒤에서 부터 정의 해야한다.
-> 자리를 바꿔서 해결

오버로딩을 위해서는 두 함수가 구분이 되어야 한다.
-> 둘다 int 형 매개변수를 4개를 받는것을 구분할 필요가 있다.
*/