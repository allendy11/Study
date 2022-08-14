import java.io.IOException;
import java.nio.file.Paths;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

public class Searcher {
	
	public SearchResult search(String output_path, String string) throws IOException, ParseException {
		// TODO Auto-generated method stub
		Directory index = FSDirectory.open(Paths.get(output_path));
		StandardAnalyzer analyzer = new StandardAnalyzer();
		
		Query q = new QueryParser("TaxDetail", analyzer).parse(string);
		int hitsPerPage = 1;
		IndexReader reader = DirectoryReader.open(index);
		IndexSearcher searcher = new IndexSearcher(reader);
		TopDocs docs = searcher.search(q, hitsPerPage);
		ScoreDoc[] hits = docs.scoreDocs;
		
		
//		System.out.println("Found " + hits.length + " hits.");
		for(int i=0;i<hits.length;i++) {
		    int docId = hits[i].doc;
		    Document d = searcher.doc(docId);
		    
//		    System.out.println(d.get("TaxID"));
		    return new SearchResult(d.get("TaxID"), docId);
		}
		return new SearchResult("", -1);
	}

}
