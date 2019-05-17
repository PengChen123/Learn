using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CefSharpBrowser.script {
    class UserInfo {
        private string userName;
        private string userPwd;

        public string UserName { get => userName; set => userName = value; }
        public string UserPwd { get => userPwd; set => userPwd = value; }
    }
}
