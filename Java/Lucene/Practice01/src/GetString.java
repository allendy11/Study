import java.util.Scanner;

public class GetString {

	public String getString() {
		Scanner scan = new Scanner(System.in);
		
		System.out.print("Insert word : ");
		
		String string = scan.nextLine();
		
		return string;
	}

}
