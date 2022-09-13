#include <iostream>
#include <string>

using namespace std;

int main()
{
  string str;
  str = "Hello";
  cout << str << endl;

  string name;
  cout << "insert name : ";
  cin >> name;

  string message = "Hello, " + name;
}