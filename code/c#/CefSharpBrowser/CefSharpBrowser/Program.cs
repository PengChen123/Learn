﻿using CefSharp;
using System;
using System.Windows.Forms;

namespace CefSharpBrowser {
    static class Program {
        /// <summary>
        /// 应用程序的主入口点。
        /// </summary>
        [STAThread]
        static void Main() {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);

            CefSharpSettings.SubprocessExitIfParentProcessClosed = true;
            Cef.EnableHighDPISupport();
            var browser = new BrowserForm();
            Application.Run(browser);
        }
    }
}
