package Java.Tutorial.Tutorial_12;

// 반복 함수, 재귀함수 : factorial

public class Main {
  // 반복 함수
  // public static int factorial(int number) {
  // int sum = 1;
  // for (int i = 2; i <= number; i++) {
  // sum *= i;
  // }
  // return sum;
  // }

  // 재귀 함수
  public static int factorial(int number) {
    if (number == 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }

  public static void main(String[] args) {
    System.out.println(factorial(10));
  }
}
