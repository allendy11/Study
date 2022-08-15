import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
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

public class Main {

	public static void main(String[] args) throws IOException, ParseException {
		String data_path = "/Users/ay/Desktop/taxdmp/names.dmp";
		String output_path = "/Users/ay/Desktop/output";
		
		Main main = new Main();
		main.set_data_path(data_path);
		main.set_output_path(output_path);
		
		// output 폴더에 파일수에 따라서 파싱작동 ( 한번 작동되면 그 이후로는 작동안되게 하기 위함) 
		File dir = new File(output_path);
		File[] files = dir.listFiles();
		if(files.length <= 1) {
			main.parse();			
		}
		
		// 검색 
		// 사용자 검색한 단어 검색 
//		System.out.print("Input word : ");
//		Scanner scan = new Scanner(System.in);
//		String word = scan.nextLine();
		
		// 지정된 단어 검색 
//		String word = "Buchnera aphidicola Tabriz.1";

		// 검색결과 TaxID 출력 
//		ResultType result = main.search(word);
//		System.out.println("Result : " + result.key);
		
		// 추가 
		main.add();
		
		// 삭제 
//		String taxId = "3651854";
//		main.delete(taxId);
		
		// 마지막 doc 출력
		main.lastDoc();
		
		// 해당 단어가 존재하지 않을떄까지 삭제 
//		ResultType result = main.search("Procaryotae");
//		while(result.key != "Not Found" && Integer.parseInt(result.key) > 0) {
//			main.delete(result.key);
//			result = main.search("Procaryotae");
//		}
//		System.out.println("done");
//		
//		result = main.search("Procaryotae");
//		System.out.println(result.key);
	}

	
	
	private void lastDoc() throws IOException {
		Directory index = FSDirectory.open(Paths.get(output_path));
		IndexReader reader = DirectoryReader.open(index);
		
		int maxDocId = reader.maxDoc();
		String maxTaxDetail = reader.document(maxDocId-1).get("TaxDetail");
		System.out.println(maxTaxDetail);
	}



	private void add() throws IOException {
		Directory index = FSDirectory.open(Paths.get(output_path));
		StandardAnalyzer analyzer = new StandardAnalyzer();
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		IndexWriter writer = new IndexWriter(index, config);
		IndexReader reader = DirectoryReader.open(index);
		
//		System.out.println(reader.numDocs());
//		System.out.println(reader.maxDoc());
		int maxDocId = reader.maxDoc();
		String maxTaxId = reader.document(maxDocId-1).get("TaxID");
		String newTaxId = Integer.toString(Integer.parseInt(maxTaxId) + 1);
		Document doc = new Document();
		doc.add(new StringField("TaxID", newTaxId, Field.Store.YES));
		doc.add(new TextField("TaxDetail", "Test001", Field.Store.YES));
		writer.addDocument(doc);
		writer.commit();
		writer.close();
		
	}



	private void delete(String taxId) throws IOException, ParseException  {
		
		Directory index = FSDirectory.open(Paths.get(output_path));
		StandardAnalyzer analyzer = new StandardAnalyzer();
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		IndexWriter writer = new IndexWriter(index, config);
//		IndexReader reader = DirectoryReader.open(index);
//		int numDocs = reader.numDocs();
//		Set<String> items = new HashSet<>(numDocs);
		
		
		// docId 로 taxId, taxDetail 출력 
//		int j = 0;
//		String taxId = reader.document(j).get("TaxID");
//		String taxDetail = reader.document(j).get("TaxDetail");
//		System.out.println(taxId + " : " + taxDetail);
		
		// doc 의 전체 길이
//		System.out.println(reader.maxDoc()); // 3651854 : 남은 doc 갯수 출력 
//		System.out.println(reader.numDocs()); // 3651854 : 마지막 docId 출력 
		
		// 마지막 docId 를 통해서 마지막 TaxId 출력 ( 마지막 index = (전체길이 -1) )
//		System.out.println(reader.document(reader.maxDoc() -1 ).get("TaxID")); // 2969681
		
		// 변경 확인
//		System.out.println(reader.document(2969682).get("TaxID"));
//		System.out.println(reader.document(2969682).get("TaxDetail"));
		
		
		// 삭제 : 쿼리파서를 이용하여 taxId 또는 taxDetail 값을 이용하여 삭제가 가
		Query q = new QueryParser("TaxID", analyzer).parse(taxId);
		writer.deleteDocuments(q);
		System.out.println("TaxID " + taxId + " is deleted");
		writer.close();
	
	}

	
	
	
	public ResultType search(String word) throws IOException, ParseException {
		Directory index = FSDirectory.open((Paths.get(output_path)));
		StandardAnalyzer analyzer = new StandardAnalyzer();
		
		Query q = new QueryParser("TaxDetail", analyzer).parse(word);
//		System.out.println(q);
		int hitsPerPage = 1;
		IndexReader reader = DirectoryReader.open(index);
		IndexSearcher searcher = new IndexSearcher(reader);
		TopDocs docs = searcher.search(q, hitsPerPage);
//		System.out.println(docs.scoreDocs.length);
		ScoreDoc[] hits = docs.scoreDocs;
		
		for(int i=0 ; i < hits.length ; i++) {
			int docId = hits[i].doc;
			Document d  = searcher.doc(docId);
			
			System.out.println("Word : " + word);
			System.out.println("TaxID : " + d.get("TaxID"));
			return new ResultType(d.get("TaxID"), docId);
		}
		
		return new ResultType("", -1);
	}

	public void parse() throws IOException {
		Directory index = FSDirectory.open(Paths.get(output_path));
		StandardAnalyzer analyzer = new StandardAnalyzer();
		IndexWriterConfig config = new IndexWriterConfig(analyzer);
		IndexWriter writer = new IndexWriter(index, config);
		
		BufferedReader reader = new BufferedReader(new FileReader(data_path));
		String str;
//		int DocID = 0;
		while((str = reader.readLine()) != null) {
//			if(DocID == 10) return;
			
			ArrayList<String> list = new ArrayList<String>();
			String[] arr = str.split("\\|");
			
			for(int i=0 ; i < arr.length ; i++) {
				list.add(arr[i].trim());
			}
			
//			System.out.print("[" + list.get(0) + "]");
//			System.out.print("[" + list.get(1) + "]");
//			System.out.print("[" + list.get(2) + "]");
//			System.out.print("[" + list.get(3) + "]");
//			System.out.println();
			
			String taxId = list.get(0);
			String taxDetail = list.get(1);
			String taxDetail_2 = list.get(2);
			
			
			if(taxDetail_2.length() > 0) {
				taxDetail += " " + taxDetail_2;
			}
			
//			DocID++;
			addDoc(writer, taxId, taxDetail);
			
		}
		reader.close();
		writer.close();
		
	}

	public void addDoc(IndexWriter writer, String taxId, String taxDetail) throws IOException {
//		System.out.println(taxId + " " + taxDetail);
		Document doc = new Document();
		doc.add(new StringField("TaxID", taxId, Field.Store.YES));
		doc.add(new TextField("TaxDetail", taxDetail, Field.Store.YES));
		writer.addDocument(doc);
		
	}

	public String output_path;
	public String data_path;

	public void set_output_path(String output_path) {
		this.output_path = output_path;
		
	}

	public void set_data_path(String data_path) {
		this.data_path = data_path;
		
	}

}
