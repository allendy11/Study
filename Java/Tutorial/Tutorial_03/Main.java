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

/*
 * Quick Fix 단축키 : Ctrl + .
 * 문자열에서 \n 은 한줄 띄우기이다
 * format 이라는 메소드를 통해서 %? 가 무엇인가에 따라서
 * 포맷이 바뀌며 두번째 인자의 값이 들어가게 된다. %o : 8진수 , %x : 16진수
 */