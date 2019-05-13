using System;

namespace learn
{
    class Program
    {
        static void Main(string[] args)
        {
            //翻转'char 数据的  单词顺序'
            char[] chars = "Hello World BeiJing".ToCharArray();
            ReverseCharsWorld.ReverseWorld.Reverse(ref chars);
            Console.WriteLine(new string(chars));
            Console.ReadKey();
        }
    }
}
