package Java.Tutorial_05;

// 조건문
public class Main {
  public static void main(String[] args) {
    String a = "I Love You";
    if (a.contains("Love")) {
      System.out.println("Me Too");
    } else {
      System.out.println("I Hate You");
    }
    int score = 95;
    if (score >= 90) {
      System.out.println("A");
    } else if (score >= 80) {
      System.out.println("B");
    } else if (score >= 70) {
      System.out.println("C");
    }

    String person = "Man";
    int age = 30;
    if (person.equals("Man")) {
      System.out.println("This is a man");
    } else {
      System.out.println("This is not a man");
    }
    if (age >= 20) {
      System.out.println("Allowed");
    } else {
      System.out.println("Not allowed");
    }
    if (person.equalsIgnoreCase("man")) {
      System.out.println("This is a man");
    }
  }
}

/*
 * 조건문
 * 
 */