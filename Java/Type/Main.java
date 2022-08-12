package Java.Type;

import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    String str = "a";
    Integer i = 100;
    ArrayList<String> list = new ArrayList<String>();

    System.out.println(str.getClass().getName());
    System.out.println(i.getClass().getName());
    System.out.println(list.getClass().getName());
  }

}
