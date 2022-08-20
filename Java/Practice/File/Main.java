package Java.File;

import java.io.File;

public class Main {
  public static void main(String[] args) {
    String dir_path = "/home/neuroears/Study/Java/dummyData";

    Main main = new Main();
    main.set_dir_path(dir_path);
    main.showDirectory(dir_path);
  }

  private void showDirectory(String path) {
    File dir = new File(dir_path);
    File files[] = dir.listFiles();
    for (int i = 0; i < files.length; i++) {
      File file = files[i];
      if (file.isDirectory()) {
        showDirectory(file.getPath());
      } else {
        System.out.println("File: " + file);
      }
    }
  }

  public String dir_path;

  public void set_dir_path(String dir_path) {
    this.dir_path = dir_path;
  }
}
