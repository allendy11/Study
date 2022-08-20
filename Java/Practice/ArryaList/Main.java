package Java.ArryaList;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
  public static void main(String[] args) {
    // Arryas.asList(array)
    List<String> list = Arrays.asList("a", "b", "c", "d");
    // System.out.println(list);
    ArrayList<String> arrayList = new ArrayList<String>(list);
    System.out.println(arrayList);

    // List.of()
    List<String> list2 = List.of("e", "f", "g", "h");
    // System.out.println(list2);
    ArrayList<String> arrayList2 = new ArrayList<String>(list2);
    System.out.println(arrayList2);

    // ArrayList.add()
    ArrayList list3 = new ArrayList();
    list3.add("i");
    list3.add("j");
    list3.add("k");
    list3.add("l");
    System.out.println(list3);
  }
}
