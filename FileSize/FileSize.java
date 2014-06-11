import java.util.Scanner;
import java.io.File;
import java.io.IOException;

class FileSize{ 
  public static void main (String[] args) throws IOException {
    File file = new File(args[0]);
    System.out.println(file.length());
  }
}

