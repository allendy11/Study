package Java.Tutorial.Tutorial_14;

import java.util.Scanner;

public class Main {
  public static int max(int a, int b) {
    return a > b ? a : b;
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("배열의 크기 : ");
    int length = scanner.nextInt();
    int[] array = new int[length];

    for (int i = 0; i < length; i++) {
      System.out.print("숫자를 입력 : ");
      int number = scanner.nextInt();
      array[i] = number;
    }
    int result = -1;
    for (int i = 0; i < length; i++) {
      result = max(result, array[i]);
    }
    System.out.println(result);
    scanner.close();
  }
}
