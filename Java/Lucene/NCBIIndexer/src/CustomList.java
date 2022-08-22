import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class CustomList {

	public static void add_custom_list(String custom_path, String taxId) {
		File file = new File(custom_path);
		if(!file.exists()) {
			create_custom_list(custom_path);
		}
		try {
			BufferedReader reader = new BufferedReader(new FileReader(file));
			ArrayList<String> list = new ArrayList<>();
			String str;
			while((str = reader.readLine()) != null) {
				System.out.println(str);
				list.add(str.trim());
			}
			list.add(taxId.trim());
			BufferedWriter writer = new BufferedWriter(new FileWriter(file));
			
			for(String s : list) {
				writer.write(s + "\n");
			}
			writer.flush();
			writer.close();
			reader.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static void create_custom_list(String custom_path) {
		int idx = custom_path.lastIndexOf("\\");
		String dir_path = custom_path.substring(0, idx);
		String file_name = custom_path.substring(idx+1 , custom_path.length());
		
		File dir = new File(dir_path);
		dir.mkdirs();
		
		File customList = new File(dir, file_name);
		try {
			customList.createNewFile();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static void remove_custom_list(String custom_path, String taxId) {
		try {
			BufferedReader reader = new BufferedReader(new FileReader(custom_path));
			ArrayList<String> list = new ArrayList<>();
			String str;
			while((str = reader.readLine()) != null) {
				System.out.println(str);
				list.add(str.trim());
			}
			for(int i = 0 ; i <list.size(); i++) {
				if(taxId.equals(list.get(i))) {
					list.remove(i);
				}
			}
			BufferedWriter writer = new BufferedWriter(new FileWriter(custom_path));
			
			for(String s : list) {
				writer.write(s + "\n");
			}
			writer.flush();
			writer.close();
			reader.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	

}
