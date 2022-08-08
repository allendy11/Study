package Java.Tutorial_08;

// 사용자 정의 함수
public class Main {
  public static int function(int a, int b, int c) {
    int min;
    if (a > b) {
      min = b > c ? c : b;
    } else {
      min = a > c ? c : a;
    }
    for (int i = min; i > 0; i--) {
      if (a % i == 0 && b % i == 0 && c % i == 0) {
        return i;
      }
    }
    return -1;
  }

  public static void main(String[] args) {
    System.out.println(function(400, 300, 750));
  }
}
