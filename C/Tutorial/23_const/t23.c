// constant 상수
#include <stdio.h>

// basic
int main()
{
  // 상수 선언
  const float PI = 3.14159;
  // float a = PI *= 2;  // error
  printf("pi: %.2f\n", PI);
  printf("&pi: %d\n", &PI);
}
/* ------------------------------------------- */

// macro 매크로
#define PI = 3.14159;

int main()
{
  float a = PI;
  printf("pi: %.2f\n", a);
}

// enum
enum State
{
  STATE_MAIN,
  STATE_PLAY,
  STATE_PAUSE,
  STATE_STOP
};

int main()
{
  // int currentState = 0;
  // int currentState = STATE_MAIN;
  State currentState;
  while (true)
  {
    switch (currentState)
    {
    case STATE_MAIN:
      break;
    case STATE_PLAY:
      break;
    case STATE_PAUSE:
      break;
    case STATE_STOP:
      break;
    }
  }
}
