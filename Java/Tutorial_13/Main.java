package Java.Tutorial_13;

// 반복함수, 재귀함수 : fibonach
public class Main {
  // 반복 함수
  // public static int fibonach(int number) {
  // int one = 1;
  // int two = 1;
  // int result = -1;
  // if (number == 1)
  // return one;
  // else if (number == 2)
  // return two;
  // else {
  // for (int i = 2; i < number; i++) {
  // result = one + two;
  // one = two;
  // two = result;
  // }
  // return result;
  // }
  // }

  // 재귀 함수
  public static int fibonach(int number) {
    if (number == 1)
      return 1;
    else if (number == 2)
      return 1;
    else
      return fibonach(number - 1) + fibonach(number - 2);
  }

  public static void main(String[] args) {
    System.out.println(fibonach(10));
  }
}
