import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field.Store;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

public class NCBIIndexer {

	public static void main(String[] args) {
		String input_path = "C:\\Users\\NeuroEars\\Desktop\\taxdmp\\names.dmp";
		String output_path = "C:\\Users\\NeuroEars\\Desktop\\output";
		
		NCBIIndexer indexer = new NCBIIndexer();
		
		indexer.set_input_path(input_path);
		indexer.set_output_path(output_path);
		indexer.set_custom_path(output_path);
		
		System.out.println("[parse]");
		indexer.parse();
		System.out.println();
		
//		System.out.println("[search]");
//		String species = "Buchnera aphidicola Tabriz.1";
//		NCBITerm term = indexer.search(species, false);
//		System.out.println("TaxID: " + term.taxId);
//		System.out.println("DocID: " + term.docId);
//		System.out.println();
		
		System.out.println("[add]");
		String add_species = "Test_custom_species_db3";
		indexer.add_custom_species(add_species);
		System.out.println();
		
		System.out.println("[remove]");
		String remove_species = "Test_custom_species_db3";
		indexer.remove_custom_species(remove_species);
		System.out.println();
		
		//test
		System.out.println("[get_maxDoc]");
		NCBITerm maxTerm = indexer.get_maxDoc();
		System.out.println("maxTaxId: " + maxTerm.taxId);
		System.out.println("maxDocId: " + maxTerm.docId);
		System.out.println("maxTaxDetail: " + maxTerm.taxDetail);
		System.out.println();
		
		
		
	}

	private void remove_custom_species(String remove_word) {
		NCBITerm term = search(remove_word, true);
		if(term.docId == -1) {
			System.out.println("Not found");
			return;
		}
			Directory index;
			try {
				index = FSDirectory.open(Paths.get(output_path));
				StandardAnalyzer analyzer = new StandardAnalyzer();
				IndexWriterConfig config = new IndexWriterConfig(analyzer);
				IndexWriter writer = new IndexWriter(index, config);
				Query query = new QueryParser("TaxDetail", analyzer).parse(remove_word);
				writer.deleteDocuments(query);
				writer.close();
				CustomList.remove_custom_list(custom_path, term.taxId);
			} catch (IOException | ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		
		
	}

	private void add_custom_species(String word) {
		NCBITerm searchTerm = search(word, true);
		if(searchTerm.docId != -1) {
			System.out.println("Species exist already");
			return;
		}
		try {
			Directory index = FSDirectory.open(Paths.get(output_path));
			StandardAnalyzer analyzer = new StandardAnalyzer();
			IndexWriterConfig config = new IndexWriterConfig(analyzer);
			IndexWriter writer = new IndexWriter(index, config);
			
			NCBITerm term = get_maxDoc();
			String newTaxId = Integer.toString(Integer.parseInt(term.taxId)+1);
			Document doc = new Document();
			doc.add(new StringField("TaxID", newTaxId, Store.YES));
			doc.add(new TextField("TaxDetail", word, Store.YES));
			writer.addDocument(doc);
			writer.close();
			CustomList.add_custom_list(custom_path, newTaxId);
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private NCBITerm get_maxDoc() {
		try {
			Directory index = FSDirectory.open(Paths.get(output_path));
			IndexReader reader = DirectoryReader.open(index);
			int maxDocId = reader.maxDoc()-1;
			String taxId = reader.document(maxDocId).get("TaxID");
			String taxDetail = reader.document(maxDocId).get("TaxDetail");
			return new NCBITerm(taxId, maxDocId,taxDetail);
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return new NCBITerm("", -1, "");
	}

	

	private NCBITerm search(String word, boolean exactMatch) {
		try {
			Directory index = FSDirectory.open(Paths.get(output_path));
			IndexReader reader = DirectoryReader.open(index);
			IndexSearcher searcher = new IndexSearcher(reader);
			StandardAnalyzer analyzer = new StandardAnalyzer();
			Query query;
			if(exactMatch) {
				word = String.format("\"%s\"", word);
			}
			query = new QueryParser("TaxDetail", analyzer).parse(word);
			int hitsPerPage = 10;
			TopDocs topDocs = searcher.search(query, hitsPerPage);
			ScoreDoc[] hits = topDocs.scoreDocs;
			for(ScoreDoc hit : hits) {
				int docId = hit.doc;
				Document doc = searcher.doc(docId);
				String taxId = doc.get("TaxID");
				String taxDetail = doc.get("TaxDetail");
				reader.close();
				return new NCBITerm(taxId, docId, taxDetail);
			}
			
		} catch (IOException | ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return new NCBITerm("", -1, "");
		
	}

	private void parse() {
		File file = new File(output_path);
		File[] files = file.listFiles();
		if(files.length >= 2) {
			System.out.println("parsed already");
			return;
		}
		try {
			Directory index = FSDirectory.open(Paths.get(output_path));
			StandardAnalyzer analyzer = new StandardAnalyzer();
			IndexWriterConfig config = new IndexWriterConfig(analyzer);
			IndexWriter writer = new IndexWriter(index, config);
			
			BufferedReader reader = new BufferedReader(new FileReader(input_path));
			String str;
			while((str = reader.readLine()) != null) {
				if(!str.contains("scientific name")) continue;
				ArrayList<String> list = new ArrayList<>();
				String[] arr = str.split("\\|");
				for(String s : arr) {
					list.add(s.trim());
				}
				String taxId = list.get(0);
				String taxDetail = list.get(1);
				String taxDetail_2 = list.get(2);
				
				if(taxDetail_2.length() > 0) {
					taxDetail += " " + taxDetail_2;
				}
				addDoc(writer, taxId, taxDetail);
			
			}
			writer.close();
			reader.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void addDoc(IndexWriter writer, String taxId, String taxDetail) throws IOException {
		Document doc = new Document();
		doc.add(new StringField("TaxID", taxId, Store.YES));
		doc.add(new TextField("TaxDetail", taxDetail, Store.YES));
		writer.addDocument(doc);
		
	}

	private String custom_path;
	private String output_path;
	private String input_path;
	
	private void set_custom_path(String output_path) {
		this.custom_path = output_path + "\\customList.txt";
	}
	
	private void set_output_path(String output_path) {
		this.output_path = output_path;
		
	}

	private void set_input_path(String input_path) {
		this.input_path = input_path;
	}

}
