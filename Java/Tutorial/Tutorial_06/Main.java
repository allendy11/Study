package Java.Tutorial.Tutorial_06;

// 반복문
public class Main {
  final static int N = 30;

  public static void main(String[] args) {
    // while
    int i = 1, sum = 0;
    while (i <= 1000) {
      sum += i++;
    }
    System.out.println(sum);

    // for
    sum = 0;
    for (int n = 0; n < 10; n++) {
      sum += n;
    }
    System.out.println(sum);

    // for 2
    for (int j = N; j > 0; j--) {
      for (int k = j; k > 0; k--) {
        System.out.print("*");
      }
      System.out.println();
    }
  }

}
