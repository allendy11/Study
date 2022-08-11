package Java.FileReader.Practice;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

// 데이터중 100개의 라인을 
// num_1: [token][token][token]... 
// num_2: [token][token][token]... 
// num_3: [token][token][token]... 
// ...
// num: 100 [token][token][token]... 
//형식으로 ArrayList에 담고 출력하시오
public class Main {
  public static void main(String[] args) throws IOException {
    // 1. reader 생성
    BufferedReader reader = new BufferedReader(
        new FileReader("/home/neuroears/Study/Java/dummyData/names.dmp"));

    // 2. 한 줄씩 저장하게될 str 선언, str 을 분할하여 저장하게될 array 선언
    String str;
    String[] array;

    // @ 출력되는 데이터량을 줄이기 위해서 임의의 num 도입
    int num = 1;

    // 3. str 의 문자열을 분할하여 array 저장
    while ((str = reader.readLine()) != null) { // 3.1 더이상의 데이터 문자열이 없으면 null 값을 가진다는것을 알수있다.
      ArrayList<String> arrayList = new ArrayList<String>(); // 4.1 rrayListt 선언, 데이터의 한라인을 돌때마다 초기화 해야하므로 이곳에 위치
      if (num > 100)
        break; // @ 100개의 데이터만 보도록하자
      // System.out.println(str); // 3.2 str 의 형식은 token | token | token | token
      array = str.split("\\|"); // 3.3 이스케이프 문자를 활용하여 '|' 을 기준으로 쪼개어 array 에 저장
      // System.out.println(array.length); // 3.4 (3.2)을 보면 array의 길이는 4 라는것을 알수있다

      // 4. 공백이 있는지 확인하고 공백을 제거하여 arrayList에 담도록 한다.
      for (int i = 0; i < array.length; i++) {
        // System.out.print(array[i]); // 4.1 공백이 있음을 확인
        arrayList.add(array[i].trim()); // 4.2 arrayList 에 공백을 제거한 값을 추가
      }

      // 5. 결과 출력
      System.out.print("Num_" + num + ": ");
      for (int i = 0; i < arrayList.size(); i++) {
        // System.out.print(i);
        System.out.print("[" + arrayList.get(i) + "]");
        System.out.print(" ");
      }
      System.out.println();

      num += 1; // @ 1씩 증가하여 100이 되면 멈춤
    }
    reader.close();
  }
}
