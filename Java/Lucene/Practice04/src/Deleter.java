import java.io.IOException;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.Query;
import org.apache.lucene.store.Directory;

public class Deleter {

	public static void delete(Directory index, String deleteTaxId) throws IOException, ParseException {
		StandardAnalyzer analyzer = new StandardAnalyzer();
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		IndexWriter writer = new IndexWriter(index, config);		
		Query query = new QueryParser("TaxID", analyzer).parse(deleteTaxId);
		ResultType result = Searcher.search(index, query);
		if(result.docId == -1) {
			System.out.println("Not Found");
		} else {
			writer.deleteDocuments(query);
			writer.close();
			System.out.println("Deleted");

		}
	}

}
