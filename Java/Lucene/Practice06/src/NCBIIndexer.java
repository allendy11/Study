import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.Writer;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Scanner;

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
import org.apache.lucene.search.Collector;
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
        int again = 0;

        NCBIIndexer indexer = new NCBIIndexer();

        indexer.set_input_path(input_path);
        indexer.set_output_path(output_path);

        System.out.println("[Parse]");
        indexer.parse();

        indexer.searchLoop(again);

    }

    private void searchLoop(int again) {
        System.out.println("[Search]");
        Scanner scan = new Scanner(System.in);
        System.out.print("Search ? (if yes, type 1) : ");
        again = scan.nextInt();
        // String word = "Buchnera aphidicola Tabriz.1";
        // int hitsPerPage = 10;

        while (again == 1) {
            scan.nextLine();
            System.out.print("Search word : ");
            String word = scan.nextLine();
            System.out.print("Hits : ");
            int hitsPerPage = scan.nextInt();
            System.out.println();
            search(word, hitsPerPage);
            //
            System.out.println("Again ? (if yes, type1 1) : ");
            again = scan.nextInt();
        }
        System.out.println("[Search end]");

    }

    private void search(String word, int hitsPerPage) {
        try {
            Directory index = FSDirectory.open(Paths.get(output_path));
            StandardAnalyzer analyzer = new StandardAnalyzer();
            IndexReader reader = DirectoryReader.open(index);
            IndexSearcher searcher = new IndexSearcher(reader);

            Query query = new QueryParser("TaxDetail", analyzer).parse(word);
            TopDocs topDocs = searcher.search(query, hitsPerPage);
            ScoreDoc[] hits = topDocs.scoreDocs;

            ArrayList<NCBITerm> list = new ArrayList<>();
            for (ScoreDoc hit : hits) {
                int docId = hit.doc;
                Document doc = searcher.doc(docId);
                NCBITerm term = new NCBITerm(docId, doc.get("TaxID"), doc.get("TaxDetail"));
                list.add(term);
            }
            String s = String.format("\"%s\"", word);
            System.out.println("[" + list.size() + " results for " + s + "]");
            for (NCBITerm term : list) {
                System.out.println("DocID: " + term.DocId);
                System.out.println("TaxID: " + term.TaxId);
                System.out.println("TaxDetail: " + term.TaxDetail + "\n");
            }
            reader.close();

        } catch (IOException | ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    private void parse() {
        File file = new File(output_path);
        if (file.list().length > 0) {
            System.out.println("Already parsed" + "\n");
            return;
        }
        try {
            Directory index = FSDirectory.open(Paths.get(output_path));
            StandardAnalyzer analyzer = new StandardAnalyzer();
            IndexWriterConfig config = new IndexWriterConfig(analyzer);
            IndexWriter writer = new IndexWriter(index, config);

            BufferedReader reader = new BufferedReader(new FileReader(input_path));
            String str;
            while ((str = reader.readLine()) != null) {
                if (!str.contains("scientific name"))
                    continue;
                ArrayList<String> list = new ArrayList<>();
                String[] arr = str.split("\\|");
                for (String s : arr) {
                    list.add(s.trim());
                }
                String taxId = list.get(0);
                String taxDetail = list.get(1);
                String taxDetail_2 = list.get(2);

                if (taxDetail_2.length() > 0) {
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

    private void addDoc(IndexWriter writer, String taxId, String taxDetail) {
        Document doc = new Document();
        doc.add(new StringField("TaxID", taxId, Store.YES));
        doc.add(new TextField("TaxDetail", taxDetail, Store.YES));
        try {
            writer.addDocument(doc);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    private String output_path;
    private String input_path;
    private String custom_path;

    private void set_output_path(String output_path) {
        this.output_path = output_path;
    }

    private void set_custom_path(String output_path) {
        this.custom_path = output_path + "\\custom.txt";
    }

    private void set_input_path(String input_path) {
        this.input_path = input_path;
    }

}
