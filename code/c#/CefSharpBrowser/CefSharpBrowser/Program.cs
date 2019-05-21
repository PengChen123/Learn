using CefSharp;
using CefSharp.WinForms;
using System;
using System.IO;
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
            //
            
            //CefSharpSettings.SubprocessExitIfParentProcessClosed = true;
            //Cef.EnableHighDPISupport();

            var settings = new CefSettings();
            //设置缓存目录
            settings.CachePath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "CefBrowser\\Cache");
            settings.Locale = "zh-CN";
            //Cef.Initialize(settings, performDependencyCheck:true, browserProcessHandler:null);
            Cef.Initialize(settings, true, true);

            var browser = new BrowserForm();
            Application.Run(browser);
        }
    }
}
