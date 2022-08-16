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

  public void parse(String data_path, String output_path) throws IOException {
    Directory index = FSDirectory.open(Paths.get(output_path));
    StandardAnalyzer analyzer = new StandardAnalyzer();
    IndexWriterConfig config = new IndexWriterConfig(analyzer);
    IndexWriter writer = new IndexWriter(index, config);

    BufferedReader reader = new BufferedReader(new FileReader(data_path));
    String str;
    while ((str = reader.readLine()) != null) {
      // if(DocID == 10) return;

      // System.out.println(str);

      String[] array = str.split("\\|");
      ArrayList<String> list = new ArrayList<String>();
      for (int i = 0; i < array.length; i++) {
        list.add(array[i].trim());
      }

      // System.out.print("[" + list.get(0) + "]");
      // System.out.print("[" + list.get(1) + "]");
      // System.out.print("[" + list.get(2) + "]");
      // System.out.print("[" + list.get(3) + "]");
      // System.out.println();

      String taxId = list.get(0);
      String taxDetail = list.get(1);
      String taxDetail_2 = list.get(2);

      if (taxDetail_2.length() == 0) {
        // System.out.println(list.get(0) + "is empty");
        taxDetail += taxDetail_2;
      }
      addDoc(writer, taxId, taxDetail);

      // DocID++;
    }
    reader.close();
    writer.close();
  }

  public void addDoc(IndexWriter writer, String taxId, String taxDetail) throws IOException {
    Document doc = new Document();
    doc.add(new StringField("TaxID", taxId, Store.YES));
    doc.add(new TextField("TaxDetail", taxDetail, Store.YES));

    writer.addDocument(doc);
  }

}
