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

public class Main {

    public static void main(String[] args) throws IOException, ParseException {
        String data_path = "/Users/ay/Desktop/taxdmp/names.dmp";
        String output_path = "/Users/ay/Desktop/output";

        Main main = new Main();
        main.set_data_path(data_path);
        main.set_output_path(output_path);

        File file = new File(output_path);
        File[] files = file.listFiles();

        // parse
        if (files.length <= 1) {
            main.parse();
        }

        // print
        // int docId = 11;
        // main.showTaxDetail(docId);
        // main.showMaxTaxDetail();

        // search
        // String word = "Buchnera aphidicola Tabriz.1";
        // main.search(word);
        // ResultType result = main.search(word);
        // System.out.println("Word : " + word);
        // System.out.println("TaxId : " + result.key);

        // add
        // String newTaxDetail = "TEST123";
        // main.add(newTaxDetail);
        // main.showMaxTaxDetail();

        // delete
        String deleteTaxId = "2969682";
        main.delete(deleteTaxId);
        main.showMaxTaxDetail();

    }

    private void showMaxTaxDetail() throws IOException {
        Directory index = FSDirectory.open(Paths.get(output_path));
        StandardAnalyzer analyzer = new StandardAnalyzer();
        IndexReader reader = DirectoryReader.open(index);
        int maxDocId = reader.maxDoc();
        String maxTaxId = reader.document(maxDocId - 1).get("TaxID");
        String maxTaxDetail = reader.document(maxDocId - 1).get("TaxDetail");

        System.out.println("maxTaxId : " + maxTaxId);
        System.out.println("maxTaxDetail : " + maxTaxDetail);
    }

    private void showTaxDetail(int docId) throws IOException {
        Directory index = FSDirectory.open(Paths.get(output_path));
        StandardAnalyzer analyzer = new StandardAnalyzer();
        IndexReader reader = DirectoryReader.open(index);
        System.out.println("DocID : " + docId);
        System.out.println("TaxID : " + reader.document(docId).get("TaxID"));
        System.out.println("TaxDetail : " + reader.document(docId).get("TaxDetail"));
    }

    private void delete(String deleteTaxId) throws IOException, ParseException {
        Directory index = FSDirectory.open(Paths.get(output_path));
        StandardAnalyzer analyzer = new StandardAnalyzer();
        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        IndexWriter writer = new IndexWriter(index, config);

        Query q = new QueryParser("TaxID", analyzer).parse(deleteTaxId);

        writer.deleteDocuments(q);
        System.out.println("TaxID " + deleteTaxId + " is deleted");
        writer.close();
    }

    private void add(String newTaxDetail) throws IOException {
        Directory index = FSDirectory.open(Paths.get(output_path));
        StandardAnalyzer analyzer = new StandardAnalyzer();
        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        IndexWriter writer = new IndexWriter(index, config);
        IndexReader reader = DirectoryReader.open(index);

        int maxDocId = reader.maxDoc();
        String maxTaxId = reader.document(maxDocId - 1).get("TaxID");
        String newTaxId = Integer.toString(Integer.parseInt(maxTaxId) + 1);
        Document doc = new Document();
        doc.add(new StringField("TaxID", newTaxId, Store.YES));
        doc.add(new TextField("TaxDetail", newTaxDetail, Store.YES));
        writer.addDocument(doc);
        writer.commit();
        writer.close();

    }

    private ResultType search(String word) throws IOException, ParseException {
        Directory index = FSDirectory.open(Paths.get(output_path));
        StandardAnalyzer analyzer = new StandardAnalyzer();

        Query query = new QueryParser("TaxDetail", analyzer).parse(word);
        int hitsPerPage = 1;
        IndexReader reader = DirectoryReader.open(index);
        IndexSearcher searcher = new IndexSearcher(reader);
        TopDocs docs = searcher.search(query, hitsPerPage);
        ScoreDoc[] hits = docs.scoreDocs;
        // System.out.println(hits.length);
        for (int i = 0; i < hits.length; i++) {
            int docId = hits[i].doc;
            Document document = searcher.doc(docId);
            System.out.println(document.get("TaxID"));
            return new ResultType(document.get("TaxID"), docId);
        }
        return new ResultType("", -1);
    }

    private void parse() throws IOException {
        Directory index = FSDirectory.open(Paths.get(output_path));
        StandardAnalyzer analyzer = new StandardAnalyzer();
        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        IndexWriter writer = new IndexWriter(index, config);

        BufferedReader reader = new BufferedReader(new FileReader(data_path));
        String str;

        while ((str = reader.readLine()) != null) {
            ArrayList<String> list = new ArrayList<String>();
            String[] arr = str.split("\\|");

            for (int i = 0; i < arr.length; i++) {
                list.add(arr[i].trim());
            }

            String taxId = list.get(0);
            String taxDetail = list.get(1);
            String taxDetail_2 = list.get(2);

            if (taxDetail_2.length() > 0) {
                taxDetail += " " + taxDetail_2;
            }
            addDoc(writer, taxId, taxDetail);
        }
        // writer.commit();
        writer.close();
        reader.close();

    }

    private void addDoc(IndexWriter writer, String taxId, String taxDetail) throws IOException {
        Document doc = new Document();
        doc.add(new StringField("TaxID", taxId, Store.YES));
        doc.add(new TextField("TaxDetail", taxDetail, Store.YES));

        writer.addDocument(doc);
    }

    private String output_path;
    private String data_path;

    private void set_output_path(String output_path) {
        this.output_path = output_path;

    }

    private void set_data_path(String data_path) {
        this.data_path = data_path;

    }

}
