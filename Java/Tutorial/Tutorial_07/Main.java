package Java.Tutorial.Tutorial_07.src;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

// 입출력
public class Main {
  public static void main(String[] args) {
    // scanner
    // Scanner sc = new Scanner(System.in);
    // System.out.print("Insert Number : ");
    // int i = sc.nextInt();
    // System.out.println("This is " + i);
    // sc.close();

    // scanner 2 : file
    File file = new File("input.txt");
    try { // exception
      Scanner sc2 = new Scanner(file);
      System.out.println(sc2);
      while (sc2.hasNextInt()) {
        System.out.println(sc2.nextInt() * 100);
      }
      sc2.close();
    } catch (FileNotFoundException e) {
      // TODO Auto-generated catch block
      e.printStackTrace(); 
      System.out.println("Not found file");
    }
  }
}