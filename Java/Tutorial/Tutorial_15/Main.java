package Java.Tutorial.Tutorial_15;

import java.util.Scanner;

// 배열 : 배열의 길이를 입력받고 그 길이 만큼 랜덤한 숫자를 생성하여 그 배열과 배열의 평균값을 리턴하시오
public class Main {
  public static int average(int[] array) {
    int length = array.length;
    int sum = 0;
    for (int i = 0; i < length; i++) {
      sum += array[i];
    }
    System.out.println("총합 : " + sum);
    int result = sum / length;
    return result;
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("배열의 길이를 입력하세요 : ");
    int length = scanner.nextInt();
    int[] array = new int[length];
    for (int i = 0; i < length; i++) {
      array[i] = (int) (Math.random() * 100 + 1);
      System.out.print(array[i] + " ");
    }
    int result = average(array);
    System.out.println("평균값 : " + result);
  }
}
