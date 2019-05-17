using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CefSharp;

namespace CefSharpBrowser.script{
    class CefCookie : ICookieVisitor {
        public void Dispose() {
        }

        public bool Visit(Cookie cookie, int count, int total, ref bool deleteCookie) {
            deleteCookie = false;
            return false;
        }
    }
}
