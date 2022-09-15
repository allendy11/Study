#include <iostream>

using namespace std;

struct TV
{
  bool powerOn;
  int channel;
  int volume;

  void setVolume(int vol)
  {
    if (vol >= 0 && vol <= 100)
    {
      volume = vol;
    }
  }
};

// 접근 제한자 (캡슐화)
struct TVs
{
private:
  bool powerOn;
  int channel;
  int volume;

public:
  void on()
  {
    powerOn = true;
    cout << "Turn on the TV" << endl;
  }
  void off()
  {
    powerOn = false;
    cout << "Turn off the TV" << endl;
  }
  void setChannel(int cnl)
  {
    if (cnl >= 1 && cnl <= 999)
    {
      channel = cnl;
    }
  }
  void setVolume(int vol)
  {
    if (vol >= 0 && vol <= 100)
    {
      volume = vol;
    }
  }
};

int main()
{
  TV lg;
  TVs samgsung;

  lg.powerOn = true;
  lg.channel = 10;
  lg.setVolume(50);
  lg.volume = 100;

  // samgsung.chnnel = 10; // error : access private
  samgsung.setChannel(10);
  // ...
}
