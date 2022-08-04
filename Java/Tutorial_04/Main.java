package Java.Tutorial_04;

public class Main {
  final static int SECOND = 1000;

  public static void main(String[] args) {
    int minute = SECOND / 60;
    int second = SECOND % 60;
    System.out.println(minute + "분" + second + "초");

    int x = 10;
    int y = 15;
    System.out.println(x == y);
    System.out.println("THIS IS" + max(x, y));
  }

  static int max(int a, int b) {
    int result = a > b ? a : b;
    return result;
  }
}
/*
 * 
 */