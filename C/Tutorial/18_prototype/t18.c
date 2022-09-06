#include <stdio.h>

void walk(int);
void rotate(int);
void drawSquare();

int main()
{
  drawSquare();
}

void walk(int a)
{
  printf("walk %d cm\n", a);
}
void rotate(int b)
{
  printf("rotate %d degree\n", b);
}

void drawSquare()
{
  for (int i = 0; i < 4; i++)
  {
    walk(10);
    rotate(90);
  }
}