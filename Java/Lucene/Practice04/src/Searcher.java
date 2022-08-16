import java.io.IOException;

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

public class Searcher {

	public static ResultType search(Directory index, Query query) throws IOException, ParseException {
//		StandardAnalyzer analyzer = new StandardAnalyzer();
		int hitsPerPage = 1;
//		Query query = new QueryParser("TaxDetail", analyzer).parse(word);
		IndexReader reader = DirectoryReader.open(index);
		IndexSearcher searcher = new IndexSearcher(reader);
		TopDocs docs = searcher.search(query, hitsPerPage);
		ScoreDoc[] hits = docs.scoreDocs;
//		System.out.println(hits.length);
		for(int i=0 ; i < hits.length ; i++) {
			int docId = hits[i].doc;
			Document d = searcher.doc(docId);
//			System.out.println(d.get("TaxID"));
			return new ResultType(d.get("TaxID"), docId);
		}
		
		return new ResultType("", -1);
	}
	

}
