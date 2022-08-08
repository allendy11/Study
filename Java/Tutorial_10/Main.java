package Java.Tutorial_10;

// 주어진 문자열의 마자막 문자를 반환하시오
public class Main {
  public static char function(String input) {
    return input.charAt(input.length() - 1);
  }

  public static void main(String[] args) {
    System.out.println("Hello world의 마지막 단어는 " + function("Hello world"));
  }
}
