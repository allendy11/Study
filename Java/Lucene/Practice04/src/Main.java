import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
//import org.apache.lucene.index.DirectoryReader;
//import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.Query;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;

public class Main {
    public static void main(String[] args) throws IOException, ParseException {
        // 경로 할당;
        String data_path = GetPath.get_data_path();
        String output_path = GetPath.get_output_path();

        Directory index = FSDirectory.open(Paths.get(output_path));
        StandardAnalyzer analyzer = new StandardAnalyzer();
        // IndexWriterConfig config = null;
        // IndexWriter writer = null;
        IndexReader reader = null;
        // output폴더에 파일이 2개이하일때만 파싱;
        System.out.println("[Parsing...]");
        File file = new File(output_path);
        File[] files = file.listFiles();
        if (files.length <= 2) {
            long startTime = System.currentTimeMillis();
            Indexer.parse(index, data_path, output_path);
            long endTime = System.currentTimeMillis();
            System.out.println("Time : " + (endTime - startTime) + "ms");
        } else {
            System.out.println("Already worked");
        }
        System.out.println();

        // 마지막 인덱스 정보;
        System.out.println("[LastDoc]");
        LastDoc lastDoc = new LastDoc(index);
        System.out.println("lastDocId : " + lastDoc.docId);
        System.out.println("lastTaxId : " + lastDoc.taxId);
        System.out.println("lastTaxDetail : " + lastDoc.taxDetail);
        System.out.println();

        // 검색;
        System.out.println("[Search]");
        String word = "Buchnera aphidicola Tabriz.1";
        System.out.println("Search word : " + word);
        Query query = new QueryParser("TaxDetail", analyzer).parse(word);
        ResultType result = Searcher.search(index, query);
        if (result.docId == -1) {
            System.out.println("Not found");
        } else {
            System.out.println("TaxID : " + result.taxId);
        }
        System.out.println();

        // 추가;
        System.out.println("[Add]");
        reader = DirectoryReader.open(index);
        String newTaxDetail = "TEST_" + (reader.maxDoc() - 3651853);
        Adder.add(index, newTaxDetail);
        System.out.println();

        // 제거;
        System.out.println("[Delete]");
        String deleteTaxId = "9";
        System.out.println("TaxID : " + deleteTaxId);
        Deleter.delete(index, deleteTaxId);
        System.out.println();
    }

}
