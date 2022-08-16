
public class SearchResult {
  String taxId;
  int docId;

  public SearchResult(String taxId, int docId) {
    if (docId == -1) {
      this.taxId = "not found";

    } else {
      this.taxId = taxId;
    }
    this.docId = docId;
  }

}
