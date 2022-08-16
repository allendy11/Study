import java.io.File;
import java.io.IOException;
// import java.nio.file.Paths;

import org.apache.lucene.queryparser.classic.ParseException;

// import org.apache.lucene.analysis.standard.StandardAnalyzer;
// import org.apache.lucene.queryparser.classic.ParseException;
// import org.apache.lucene.store.Directory;
// import org.apache.lucene.store.FSDirectory;

public class Main {
    /**
     * @param args
     * @throws ParseException
     * @throws Exception
     */
    public static void main(String[] args) throws IOException, ParseException {
        GetString getString = new GetString();
        String string = getString.getString();

        SetPath setPath = new SetPath();
        String data_path = setPath.getData_path();
        String output_path = setPath.getOutput_path();

        // 파일 갯수 확인 (파일이 없는 경우에만 parse() 실행)
        File dir = new File(output_path);
        File[] files = dir.listFiles();
        // System.out.println(files.length);

        if (files.length == 0) {
            Indexer indexer = new Indexer();
            indexer.parse(data_path, output_path);
        }

        // Searcher searcher = new Searcher();
        SearchResult searchResult = Searcher.search(output_path, string);
        System.out.println("TaxID : " + searchResult);
    }
}
