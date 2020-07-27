public class Solution {
    public boolean isSubsequence(String s, String t) {
        //对s字串维护头尾两个指针
        int low = 0;
        int high = s.length() - 1;
        //对t字串维护头尾两个指针，同时和s的头尾进行比较
        for(int i=0, j=t.length() - 1; i<j; i++, j--) {
            //当low大于high,说明s中所有的字符都在t中已找到，可直接返回
            if(low > high) {
                return true;
            }

            //如果为s的头部找到匹配，则寻找下一个匹配
            if(s.charAt(low) == t.charAt(i)){
                low++;
            }

            //如果为s的尾部找到匹配，则寻找下一个匹配
            if(s.charAt(high) == t.charAt(j)){
                high--;
            }
        }
        return low > high;
    }
}
