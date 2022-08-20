import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Paths;
import java.io.BufferedReader;
import java.io.File;
import java.util.ArrayList;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.Field.Store;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.index.Term;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TermQuery;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

import com.sun.tools.javac.Main;

public class NCBIIndexer {

	public static void main(String[] args) throws IOException, ParseException {
		// TODO Auto-generated method stub
		String input_path = "/Users/ay/Desktop/taxdmp/names.dmp";
	    String output_directory_index = "/Users/ay/Desktop/output";
	    NCBIIndexer indexer = new NCBIIndexer();
	    
	    indexer.set_input_path(input_path);
	    indexer.set_index_directory(output_directory_index);
	    
	    // [parse]
	    File file = new File(indexer.index_directory);
	    File[] files = file.listFiles();
	    if(files.length <= 2) {
		    indexer.parse();
	    }
	    
	    // [search]
	    NCBITerm tax_id =indexer.search("Test_custom_species_db4");
	    
//	    NCBITerm tax_id =indexer.search("Buchnera aphidicola Tabriz.1");
	    System.out.println("[Search]");
	    System.out.println("TaxID : " + tax_id.key);
//	    System.out.println(tax_id.docId);
	    System.out.println();
	    
	    
	    // [delete] taxId 로 삭제; (사용안함)
//	    indexer.delete("2969682");
	    
	    
	    
	    // [add]
//	    indexer.add_custom_species("Test_custom_species_db1");
//	    indexer.add_custom_species("Test_custom_species_db2");
//	    indexer.add_custom_species("Test_custom_species_db3");
//	    indexer.add_custom_species("Test_custom_species_db4");
	    
	    // [remove]
//	    indexer.remove_species("Test_custom_species_db2");
//	    indexer.remove_species("Buchnera aphidicola Tabriz.1");
	    
	    
	    
	    // [마지막 taxId/taxDetail 출력];
	    indexer.showMaxTaxDetail();
//	    System.out.println();
	    

	    
	    
	    // test
//	    indexer.add_custom_maxId();
	    
	}

//	maxDocID : 2435211
//	maxTaxId : 2969682
//	maxTaxDetail : Test_custom_species_db1
//	maxDocID : 2435210
//	maxTaxId : 2969683
//	maxTaxDetail : Test_custom_species_db2
//	maxDocID : 2435211
//	maxTaxId : 2969684
//	maxTaxDetail : Test_custom_species_db3
//	maxDocID : 2435212
//	maxTaxId : 2969685
//	maxTaxDetail : Test_custom_species_db4
	
	


	public void remove_species(String speciesName) throws IOException, ParseException {
		System.out.println("[Remove_species]");
		Directory index = FSDirectory.open(Paths.get(index_directory));
		StandardAnalyzer analyzer = new StandardAnalyzer();
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		IndexWriter writer = new IndexWriter(index, config);
		
		NCBITerm result = search(speciesName);
		if(result.docId == -1) {
			System.out.println("Not found");
		} else {
			String nstr = String.format("\"%s\"",speciesName);
			Query query = new QueryParser("TaxDetail", analyzer).parse(speciesName);
			writer.deleteDocuments(query);
			System.out.println(speciesName + " deleted");
		}
		writer.commit();
		writer.close();
		
		System.out.println();
	}



	public void add_custom_species(String speciesName) throws IOException {
		Directory index = FSDirectory.open(Paths.get(index_directory));
		StandardAnalyzer analyzer = new StandardAnalyzer();
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		IndexWriter writer = new IndexWriter(index, config);
		IndexReader reader = DirectoryReader.open(index);
		
		int maxDocId = reader.maxDoc();
		
		
		String maxTaxId = reader.document(maxDocId-1).get("TaxID");
		String newTaxId = Integer.toString(Integer.parseInt(maxTaxId) + 1);
		Document doc = new Document();
		doc.add(new StringField("TaxID", newTaxId, Store.YES));
		doc.add(new TextField("TaxDetail", speciesName, Store.YES));
		writer.addDocument(doc);
		writer.commit();
		writer.close();
	}
	public void createFile() throws IOException {
		System.out.println("[createFile]");
		
		int idx = custom_directory.lastIndexOf("/");
		String dir = custom_directory.substring(0, idx);
		String fileName = custom_directory.substring(idx+1, custom_directory.length());
		
//		System.out.println(dir + "/" + fileName );
		
		File file_dir = new File(dir);
		file_dir.mkdirs();
		File file_custom = new File(file_dir, fileName);
		file_custom.createNewFile();
	}
	public String readFile(File file) throws IOException {
		BufferedReader reader = new BufferedReader(new FileReader(file));
		String str = "";
		int ch;
		while((ch = reader.read()) != -1) {
			str += (char) ch;
		}
		reader.close();
		
		return str;
	}
//	public void updateFile(String TaxId, String TaxDetail) throws IOException {
//		File file = new File(custom_directory);
//		if(!file.exists()) {
//			createFile();
//		}
//		String fileText = readFile(file);
//		ArrayList list = new ArrayList();
//		list.add(TaxId);
//		list.add(TaxDetail);
//		BufferedWriter writer = new BufferedWriter(new FileWriter(file));
//		String str = list.get(0)
//			
//	}
//	public void add_custom_maxId() throws IOException {
//		System.out.println("[add_custom_maxId]");
//		
//		File file = new File(custom_directory);
//		
//		if(!file.exists()) {
//			
//		}
//		BufferedReader reader = new BufferedReader(new FileReader(File));
//				
//	}
	
	
	public void showMaxTaxDetail() throws IOException {
		System.out.println("[ShowMaxDoc]");
		Directory index = FSDirectory.open(Paths.get(index_directory));
		StandardAnalyzer analyzer = new StandardAnalyzer();
		IndexReader reader = DirectoryReader.open(index);
		int maxDocId = reader.maxDoc();
		String maxTaxId = reader.document(maxDocId -1).get("TaxID");
		String maxTaxDetail = reader.document(maxDocId -1).get("TaxDetail");
		
		System.out.println("maxDocID : " + (maxDocId - 1));
		System.out.println("maxTaxId : " + maxTaxId);
		System.out.println("maxTaxDetail : " + maxTaxDetail);
		System.out.println();
	}
	
	private void delete(String deleteTaxId) throws IOException, ParseException {
		Directory index = FSDirectory.open(Paths.get(index_directory));
		StandardAnalyzer analyzer = new StandardAnalyzer();
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		IndexWriter writer = new IndexWriter(index, config);
		
		int hitsPerPage = 1;
		Query query = new QueryParser("TaxID", analyzer).parse(deleteTaxId);
		IndexReader reader = DirectoryReader.open(index);
		IndexSearcher searcher = new IndexSearcher(reader);
		
		TopDocs docs = searcher.search(query, hitsPerPage);
		ScoreDoc[] hits = docs.scoreDocs;
		
		NCBITerm result = null;
		for(int i=0;i<hits.length;i++) {
		    int docId = hits[i].doc;
		    Document d = searcher.doc(docId);
		    
//		    System.out.println(d.get("TaxID"));
		    result = new NCBITerm(d.get("TaxID"), docId);
		    if(result.docId == -1) {
		    	System.out.println("Not Found");
		    } else {
		    	writer.deleteDocuments(query);
		    	writer.close();
		    	System.out.println("Deleted");
		    	
		    }		
		}
		
	}


	public NCBITerm search(String string) throws IOException {
		// TODO Auto-generated method stub
		StandardAnalyzer analyzer = new StandardAnalyzer();
		Directory index = FSDirectory.open(Paths.get(index_directory));		
//		IndexWriterConfig config = new IndexWriterConfig(analyzer);
//		IndexWriter indexWriter = new IndexWriter(index, config);

		String newStr = String.format("\"%s\"", string);
		
		
		try {
//			Query q = new QueryParser("TaxDetail", analyzer).parse(string);
			Query q = new QueryParser("TaxDetail", analyzer).parse(newStr);
			int hitsPerPage = 1;
			IndexReader reader = DirectoryReader.open(index);
			IndexSearcher searcher = new IndexSearcher(reader);
			TopDocs docs = searcher.search(q, hitsPerPage);
			ScoreDoc[] hits = docs.scoreDocs;
			
			
			System.out.println("Found " + hits.length + " hits.");
			for(int i=0;i<hits.length;i++) {
			    int docId = hits[i].doc;
			    Document d = searcher.doc(docId);
			    
//			    System.out.println(d.get("TaxID"));
			    return new NCBITerm(d.get("TaxID"), docId);
			}
			
			
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return new NCBITerm("", -1);
	}



	public void parse() throws IOException{
		// TODO Auto-generated method stub
		BufferedReader reader = new BufferedReader(
			new FileReader(input_path)
		);
		String str;     
		
		StandardAnalyzer analyzer = new StandardAnalyzer();
		Directory index = FSDirectory.open(Paths.get(index_directory));
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		IndexWriter indexWriter = new IndexWriter(index, config);
		int docID = 0;
		
		while ((str = reader.readLine()) != null) {
			if(!str.contains("scientific name")) {
				continue;
			}
			ArrayList<String> arrayList = new ArrayList<String>();
			
// 3. Split line with "|" to String[] tokens
			String[] tokens = str.split("\\|");
			for(int i = 0 ; i < tokens.length ; i++ ) {
				String newTokens = tokens[i].trim();
				
// 4. Print tokens line by line. String format: [token][token][token]...
// 5. Remove empty spaces for each token
				
//				System.out.print("[" +newTokens + "]");
				
// 6. Store cleaned tokens to ArrayList<String> tokenList
// 7. Add Documents using writer.updateDocument (Terms: DocID ~ # of docs, Fields: TaxID(tokens[0]), TaxDetail(String format: tokens[1] tokens[2])
				
				arrayList.add(newTokens);
//				System.out.print(tokenList.get(0));
				
			}
			String taxID = arrayList.get(0);
			String taxDetail = arrayList.get(1);
			String subTaxDetail = arrayList.get(2);
			if(!subTaxDetail.isEmpty()) {
				taxDetail += " " + subTaxDetail;
			}
			
			addDoc(indexWriter, taxID, taxDetail, docID);
			docID++;
//			System.out.print(tokenList.get(0));
//			System.out.println();
		}

		indexWriter.commit();
		reader.close();
		indexWriter.close();
	}
	public void addDoc(IndexWriter w, String TaxID, String TaxDetail, int docID) throws IOException {
//		Term updateTerm = new Term("DocID", Integer.toString(docID));
		Document doc = new Document();
		doc.add(new StringField("TaxID", TaxID, Field.Store.YES));
		doc.add(new TextField("TaxDetail", TaxDetail, Field.Store.YES));
		
//		w.updateDocument(updateTerm, doc);

		w.addDocument(doc);
	}

	private String input_path;
	
	private String index_directory;

	private String custom_directory;
	
	public void set_input_path(String input_path) {
		// TODO Auto-generated method stub
		this.input_path = input_path;
	}

	public void set_index_directory(String output_directory_index) {
		// TODO Auto-generated method stub
		this.index_directory = output_directory_index;
		this.custom_directory = output_directory_index + "/" + "custom_maxId.txt";
	}

}
// 8. https://www.lucenetutorial.com/lucene-in-5-minutes.html

// 1. QueryParser
// 2. Search for a single match (top-1)
// 3. String NCBITerm.key = TaxID
// 4. int NCBITerm.docID = docID
// 5. Return a new NCBITerm("TaxID", docID) or a new NCBITerm("", -1)
