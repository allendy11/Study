package Java.Tutorial.Tutorial_11;

//  최대값을 반환하시오.
public class Main {
  public static int max(int a, int b) {
    return a > b ? a : b;
  }

  public static int function(int a, int b, int c) {
    int result = max(a, b);
    result = max(result, c);
    return result;
  }

  public static void main(String[] args) {
    System.out.println("345, 567, 789 중에서 가장 큰 수는 " + function(345, 567, 789));
  }
}
