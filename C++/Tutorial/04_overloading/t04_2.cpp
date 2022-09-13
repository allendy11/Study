#include <iostream>

using namespace std;
int inventory[20] = {0};
int score = 0;

// void getItem(int itemId)
// {
//   inventory[itemId]++;
// }
// void getItem(int itemId, int cnt)
// {
//   inventory[itemId] += cnt;
// }
// void getItem(int itemId, int cnt, int sc)
// {
//   inventory[itemId] += cnt;
//   score += sc;
// }

// default value
void getItem(int itemId, int cnt = 1, int sc = 0) // 매개변수의 오른쪽부터 디폴트값이 주어지게 된다.
{
  inventory[itemId] += cnt;
  score += sc;
}

int main()
{
  getItem(1);
  getItem(2, 10);
  getItem(10, 1, 5000);

  for (int i : inventory)
  {
    cout << i << " ";
  }
}