package Java.Tutorial_06;

public class Main {
  public static void main(String[] args) {
    int i = 1, sum = 0;
    while (i <= 1000) {
      sum += i++;
    }
    System.out.println(sum);

    sum = 0;
    for (int n = 0; n < 10; n++) {
      sum += n;
    }
    System.out.println(sum);
  }
}
