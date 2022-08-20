package Java.FileReader.FileReader;

import java.io.FileReader;
import java.io.IOException;

public class Main {
  public static void main(String[] args) throws IOException {
    FileReader reader = new FileReader("/home/neuroears/Study/Java/dummyData/dummyData.txt");
    int ch;
    while ((ch = reader.read()) != -1) {
      System.out.println((char) ch);
    }
  }
}
