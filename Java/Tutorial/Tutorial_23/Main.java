package Java.Tutorial.Tutorial_20;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.print("Banana : 1 , Peach : 2 ? ");
    int input = scanner.nextInt();
    Fruit fruit;
    if (input == 1) {
      fruit = new Banana();
    } else if (input == 2) {
      fruit = new Peach();
    }
    fruit.show();
  }
}
