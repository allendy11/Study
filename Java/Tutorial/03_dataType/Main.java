package Java.Tutorial.Tutorial_03;

public class Main {
  public static void main(String[] args) {
    int a = (int) 0.5; // 형 변환
    System.out.println(a);
    // 자료형

    int b = 200;
    System.out.println("10진수 : " + b);
    System.out.format("8진수 : %o\n", b);
    System.out.format("16진수 : %x\n", b);

    String name = "John Doe";
    System.out.println(name);
    System.out.println(name.substring(0, 1));
  }
}
