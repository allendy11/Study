package Java.FileReader.BufferedReader;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader reader = new BufferedReader(new FileReader("/home/neuroears/Study/Java/dummyData/dummyData.txt"));
    String str;
    while ((str = reader.readLine()) != null) {
      System.out.println(str);
    }
    reader.close();
  }
}
