import java.io.IOException;

import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.store.Directory;

public class LastDoc {

  int docId;
  String taxId;
  String taxDetail;

  public LastDoc(Directory index) throws IOException {
    IndexReader reader = DirectoryReader.open(index);
    this.docId = reader.maxDoc();
    this.taxId = reader.document(docId - 1).get("TaxID");
    this.taxDetail = reader.document(docId - 1).get("TaxDetail");
  }

}
