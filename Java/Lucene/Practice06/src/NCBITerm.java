
public class NCBITerm {
  int DocId;
  String TaxId;
  String TaxDetail;

  public NCBITerm(int docId, String taxId, String taxDetail) {
    this.DocId = docId;
    this.TaxId = taxId;
    this.TaxDetail = taxDetail;
  }
}
