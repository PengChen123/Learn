using System;
using System.Collections.Generic;
using System.Text;

namespace learn.ReverseCharsWorld
{
    public static class ReverseWorld
    {
        public static void Reverse(ref char[] chars) {
            if (chars == null) {
                chars = new char[]{};
            }
            
            int len = chars.Length;
            Reverse(ref chars, 0, len - 1);
            int start = 0;
            int end = 0;
            bool setStart = false;
            for (int i = 0; i < len; i++) {
                if (!setStart) {
                    if (chars[i] != ' ') {
                        start = i;
                        setStart = true;
                    }
                }
                if (chars[i] == ' ' || i == len-1) {
                    if (i != len - 1){
                        end = i - 1;
                    }else {
                        end = i;
                    }
                    Reverse(ref chars, start, end);
                    setStart = false;
                }
            }
        }
        private static void Reverse(ref char[] chars,int i,int j) {
            char c = '\0';
            while (i < j) {
                c = chars[i];
                chars[i] = chars[j];
                chars[j] = c;
                i++;
                j--;
            }
        }
    }
}
