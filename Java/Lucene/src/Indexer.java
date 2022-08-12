import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field.Store;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

public class Indexer {
  private IndexWriter writer;

  public Indexer(String data_path, String index_path) throws IOException {
    Directory index = FSDirectory.open(Paths.get(index_path));
    StandardAnalyzer analyzer = new StandardAnalyzer();
    IndexWriterConfig config = new IndexWriterConfig(analyzer);
    writer = new IndexWriter(index, config);
  }

  private BufferedReader getReader(String data_path) throws IOException {
    BufferedReader reader = new BufferedReader(new FileReader(data_path));
    return reader;
  }

  public void createIndex(String data_path) throws IOException {
    BufferedReader reader = getReader(data_path);
    String str;
    while ((str = reader.readLine()) != null) {
      ArrayList<String> list = new ArrayList<String>();
      String[] array = str.split("\\|");
      for (int i = 0; i < array.length; i++) {
        list.add(array[i].trim());
      }
      String taxId = list.get(0);
      String taxDetail = list.get(1);
      String taxDetail_2 = list.get(2);
      if (!taxDetail_2.isEmpty()) {
        taxDetail += taxDetail_2;
      }
      addDoc(writer, taxId, taxDetail);
    }
    // writer.commit();
    reader.close();
    // return writer.numDoc(); // 아마도 output폴더에 생성되는 파일 갯수가 아닌가..
  }

  private void addDoc(IndexWriter writer, String taxId, String taxDetail) throws IOException {
    Document doc = new Document();
    doc.add(new StringField("TaxID", taxId, Store.YES)); // Field.Store.YES ??
    doc.add(new TextField("TaxDetail", taxDetail, Store.YES));
    writer.addDocument(doc);
  }

  public void close() throws IOException {
    writer.close();
  }

}