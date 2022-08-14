
public class SearchResult {

	public String key;
	public int docId;
	
	
	public SearchResult(String taxId, int docId) {
		if(docId == -1) {
			this.key = "not found";
			
		} else {			
			this.key = taxId;
		}
		this.docId = docId;
	}

	

}
