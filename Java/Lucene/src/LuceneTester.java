import java.io.IOException;

public class LuceneTester {
  String data_path = "C:\\Users\\NeuroEars\\Desktop\\Triaina\\Triaina_data\\taxdmp\\names.dmp";
  String index_path = "C:\\Users\\NeuroEars\\Desktop\\Triaina\\output";
  Indexer indexer;
  Searcher searcher;

  public static void main(String[] args) throws IOException {
    LuceneTester tester;
    tester = new LuceneTester();
    tester.createIndex();
    // tester.search("Buchnera aphidcola Tabriz.1");
  }

  private void createIndex() throws IOException {
    indexer = new Indexer(data_path, index_path);
    // int numIndexed;
    long startTime = System.currentTimeMillis();
    // numIndexed = indexer.createIndex(data_path);
    indexer.createIndex(data_path);
    long endTime = System.currentTimeMillis();
    indexer.close();
    // System.out.println(numIndexed + " File indexed [Time: " + (endTime -
    // startTime) + " ms]");
    System.out.println("Time: " + (endTime - startTime) + " ms");
  }

  private void search(String string) {
  }
}
