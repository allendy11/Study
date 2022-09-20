// 생성자를 선언하는 팁
// 오버로딩을 사용 , 축약

#include <iostream>

using namespace std;

// 예시: 시(h), 분(m), 초(s)를 인자를 받아서 출력하는 함수를 작성
/*
  1. private 변수 선언

  2. 오버로딩을 생각한다면 받는 인자의 갯수에따른 함수를 각각 선언
    모두받지않는 경우 -> 디폴트 0;
    s 만 받는 경우
    s, m 을 받는 경우
    s, m, h 모두 받는 경우
  3. 인자에 따라 구분된 함수가 중복된 부분이 있다면 앞의 함수를 호출하는 것이 가능
    h() {
      m();
      h;
    }
    m() {
      s();
      m;
    }
    s(){
      s;
    }
*/

class Time
{
public:
  Time() : s(0), m(0), h(0) {}
  Time(int _s) : Time()
  {
    s = _s;
  }
  Time(int _s, int _m) : Time(_s)
  {
    m = _m;
  }
  Time(int _s, int _m, int _h) : Time(_s, _m)
  {
    h = _h;
  }

private:
  int h;
  int m;
  int s;
};

int main()
{
  Time t1;
  Time t2(5);
  Time t3(4, 20);
  Time t4(12, 35, 6);
}
