import java.util.*;
import java.io.*;

class LowerCase { 
  public static void main (String[] args) {
    File file = new File(args[0]);
    BufferedReader in = null;
    try { 
     in = new BufferedReader(new FileReader(file));
    } catch (IOException e) {
      e.printStackTrace();
    }
    String line;
    try {
      while ((line = in.readLine()) != null) {
        String[] lineArray = line.split(" ");
        if (lineArray.length > 0) {
          System.out.println(line.toLowerCase());
        }
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
