#include <stdio.h>

struct Time
{
  int h, m, s;
  int totalSec()
  {
    return 3600 * h + 60 * m + s;
  }
};

// int totalSec(Time t)
// {
//   return 3600 * h + 60 * m + s;
// };
int main()
{
  Time t = {1, 22, 48};
  // printf("%d\n", totalSec(t));
  printf("%d\n", t.totalSec());
}