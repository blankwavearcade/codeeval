import java.util.Scanner;
import java.io.File;
import java.io.IOException;

class SumOfDigits{ 
  public static void main (String[] args) throws IOException {
    Scanner s =  new Scanner(new File(args[0]));
    int sum =0;
    while (s.hasNextLine()){
      String line = s.nextLine(); 
      char[] cArray = line.toCharArray();
      for(int i = 0; i < cArray.length; i++) {
        sum += Character.getNumericValue(cArray[i]);
      }
      System.out.println(sum);
      sum = 0;
      /*while(sum % 10 != 0) {
        sum = (num % 10) + (num / 10);
        System.out.println(sum);
      }*/
    }
  }
}
