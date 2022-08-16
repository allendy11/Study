import java.io.IOException;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field.Store;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.store.Directory;

public class Adder {

  public static void add(Directory index, String newTaxDetail) throws IOException {
    StandardAnalyzer analyzer = new StandardAnalyzer();
    IndexWriterConfig config = new IndexWriterConfig(analyzer);
    IndexWriter writer = new IndexWriter(index, config);
    Document doc = new Document();

    LastDoc lastDoc = new LastDoc(index);
    String newTaxId = Integer.toString(Integer.parseInt(lastDoc.taxId) + 1);

    doc.add(new StringField("TaxID", newTaxId, Store.YES));
    doc.add(new TextField("TaxDetail", newTaxDetail, Store.YES));

    writer.addDocument(doc);
    writer.commit();
    writer.close();

    LastDoc addedDoc = new LastDoc(index);
    System.out.println("AddedDocId : " + addedDoc.docId);
    System.out.println("AddedTaxId : " + addedDoc.taxId);
    System.out.println("AddedTaxDetail : " + addedDoc.taxDetail);
  }

}
