
public class ResultType {

	public String key;
	public int docId;
	
	public ResultType(String key, int docId) {
		if(docId == -1 ) { 
			this.key = "Not Found";
		} else {
			this.key = key;
		}
		this.docId = docId;
	}

}
