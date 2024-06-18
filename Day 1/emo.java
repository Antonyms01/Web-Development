import java.util.Arrays;

public class emo
{
    public static void main(String[] args) {
        int arr[]={99,88,77,55,42,16};
        Arrays.sort(arr);
        for(int i=0;i<arr.length;i++)
        {
            System.out.print(arr[i]);
            if(i!=arr.length-1)
            {
                System.out.print(",");
            }
        }
    
        

        
        
    }
}