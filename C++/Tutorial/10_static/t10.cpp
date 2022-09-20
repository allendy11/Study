// static : 정적 멤버
// 전역변수 또는 전역 함수는 OOP에서 지양하는 것이 좋다. 이를 위해서 클래스 내부에 정적멤버로 선언하여 사용하게 된다.
#include <iostream>

using namespace std;

// int id_counter = 1;

class Color
{
public:
  Color() : r(0), g(0), b(0), id(id_counter++) {}
  Color(float r, float g, float b) : r(r), g(g), b(b) {}

  float GetR() { return r; }
  float GetG() { return g; }
  float GetB() { return b; }

  static Color MixColors(Color a, Color b)
  {
    return Color((a.r + b.r) / 2, (a.g + b.g) / 2, (a.b + b.b) / 2);
  }
  // sttic int id_counter = 1 // 정적멤버에는 초기값이 주어질수 없다.
  static int id_counter;

private:
  float r;
  float g;
  float b;
  int id;
};

// Color MixColors(Color a, Color b)
// {
//   return Color((a.GetR() + b.GetR()) / 2, (a.GetG() + b.GetG()) / 2, (a.GetB() + b.GetB()) / 2);
// }

int Color::id_counter = 1

    int
    main()
{
  Color red(1, 0, 0);
  Color blue(0, 0, 1);
  // Color purple = MixColors(blue, red);
  Color purple = Color::MixColors(red, blue);
}