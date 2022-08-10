package Java.Tutorial.Tutorial_02;

public class Main {
  final static double PI = 3.141592; // 상수 선언

  public static void main(String[] args) {
    int intType = 100; // 정수
    double doubleType = 102.3; // 실수
    String stringType = "string"; // 문자열

    System.out.println(intType);
    System.out.println(doubleType);
    System.out.println(stringType);
    System.out.println(intType * PI);

  }

}

/*
 * 변수선언시 자료형에의해서 변수의 타입이 결정난다.
 * 상수는 바깥쪽에 final 을 이용하여 선언이 되어 접근이 가능해진다.
 * 
 */