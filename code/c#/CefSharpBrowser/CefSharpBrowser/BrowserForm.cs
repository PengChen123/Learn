using System;
using System.Diagnostics;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml;
using CefSharp;
using CefSharpBrowser.script;
using CefSharpBrowser.script.md5;
using CefSharpBrowser.script.tools;
using CefSharpBrowser.script.Controls;

namespace CefSharpBrowser {
    public partial class BrowserForm : Form {
        ExtChromiumBrowser browser = null;
        private string curUrl = "http://wan.360.cn/game/aswsol";
        //private const string iniFileName = "config.ini";
        //private const string platFileName = "platform.xml";
        //private const string titleName = "傲视无双";
        //private string platName = "8090";

        //private AccInfo accInfo;

        public BrowserForm() {
            InitializeComponent();
            //Text = titleName;
            FormBorderStyle = FormBorderStyle.Sizable;
            WindowState = FormWindowState.Maximized;
            AutoSizeMode = AutoSizeMode.GrowOnly;
        }
        private void BrowserForm_Load(object sender, EventArgs e) {
            //this.curUrl = GetPlatUrl();
            //accInfo = new AccInfo();
            //GetAccInfo(this.platName);
            //this.Text = this.platName + titleName;
            InitBrowser();
        }

        public void InitBrowser() {
            browser = new ExtChromiumBrowser(curUrl) {
                Dock = DockStyle.Fill
            };
            this.Controls.Add(browser);
            //browser.FrameLoadEnd += Browser_FrameLoadEndAsync;
            browser.StartNewWindow += Browser_StartNewWindow;
            browser.TitleChanged += Browser_TitleChanged;
            browser.IsBrowserInitializedChanged += Browser_IsBrowserInitializedChanged;
        }

        private void Browser_IsBrowserInitializedChanged(object sender, IsBrowserInitializedChangedEventArgs e) {
            if (e.IsBrowserInitialized) {
                ExtChromiumBrowser browser = (ExtChromiumBrowser)sender;
                this.InvokeOnUiThreadIfRequired(() => browser.Focus());
            }
        }

        private void Browser_TitleChanged(object sender, TitleChangedEventArgs e) {
            this.InvokeOnUiThreadIfRequired(()=> Text = e.Title);
        }

        //string username = "zhu830123";
        //private void Browser_FrameLoadEndAsync(object sender, FrameLoadEndEventArgs e) {
        //if (!string.IsNullOrEmpty(accInfo.UId) && !string.IsNullOrEmpty(accInfo.PId) && !string.IsNullOrEmpty(accInfo.SubId)) {
        //    string str = JsScriptStr(ref accInfo, username, username);
        //var task = browser.EvaluateScriptAsync(str);
        //var cookieManager = Cef.GetGlobalCookieManager();
        //Md5Util md5 = new Md5Util();
        //task.ContinueWith(async tt => {
        //    var reponse = tt.Result;
        //    if (reponse.Success) {
        //        //var cookieManager = Cef.GetGlobalCookieManager();
        //        cookieManager.SetStoragePath("cookies", true);
        //        cookieManager.SetSupportedSchemes(new string[] { "custom" });
        //        if (cookieManager.SetCookie("custom://cefsharp/home.html", new Cookie {
        //            Name = md5.DESEncrypt("CefSharpTestCookie"),
        //            Value = md5.DESEncrypt("ILikeCookies"),
        //        })) {
        //            await cookieManager.VisitUrlCookiesAsync("custom://cefsharp/home.html", false).ContinueWith(previous => {
        //                if (previous.Status == TaskStatus.RanToCompletion) {
        //                    var cookies = previous.Result;

        //                    foreach (var cookie in cookies) {
        //                        Debug.WriteLine("Url CookieName: " + cookie.Name+ "  CookieValue:" + cookie.Value);
        //                    }
        //                } else {
        //                    Debug.WriteLine("Url No Cookies found");
        //                }
        //            });

        //            await cookieManager.VisitAllCookiesAsync().ContinueWith(t => {
        //                if (t.Status == TaskStatus.RanToCompletion) {
        //                    var cookies = t.Result;

        //                    foreach (var cookie in cookies) {
        //                        Debug.WriteLine("All CookieName: " + cookie.Name + "  CookieValue:" + cookie.Value);
        //                    }
        //                } else {
        //                    Debug.WriteLine("All No Cookies found");
        //                }
        //            });
        //        }
        //    }
        //});
        //}
        //browser.FrameLoadEnd -= Browser_FrameLoadEndAsync;
        //}
        //private string JsScriptStr(ref AccInfo accInfo,string user,string pwd) {
        //    StringBuilder sb = new StringBuilder();
        //    sb.Append("(function (){var _uId = document.getElementById('");
        //    sb.Append(accInfo.UId);
        //    sb.Append("');var _pwd = document.getElementById('");
        //    sb.Append(accInfo.PId);
        //    sb.Append("');var _submit = document.getElementById('");
        //    sb.Append(accInfo.SubId);
        //    sb.Append("');_uId.setAttribute('value','");
        //    sb.Append(user);
        //    sb.Append("');_pwd.setAttribute('value', '");
        //    sb.Append(pwd);
        //    sb.Append("');_submit.click();})()");
        //    return sb.ToString();
        //}
        private void Browser_StartNewWindow(object sender, NewWindowEventArgs e) {
            var browser = sender as ExtChromiumBrowser;
            curUrl = e.Url;
            browser.Load(curUrl);
        }

        //private string GetPlatUrl() {
        //    IniMgr ini = new IniMgr();
        //    string iniFilePath = AppDomain.CurrentDomain.BaseDirectory + iniFileName;

        //    ini.IniFile(iniFilePath);
        //    ini.ParseIni();

        //    return ini.GetString("PlatForms", platName, string.Empty);
        //}

        //private void GetAccInfo(string platName) {
            //XmlMgr xml = new XmlMgr();
            //string xmlFilePath = AppDomain.CurrentDomain.BaseDirectory + platFileName;
            //xml.LoadXml(xmlFilePath);
            //xml.GetRootNodes("platforms");
            //XmlNode node = xml.GetNodeById(this.platName);
            //this.curUrl = (node as XmlElement).GetAttribute("url");
            //XmlNodeList nodeList = node.ChildNodes;

            //foreach (XmlNode x in nodeList) {
            //    if ("uId".Equals(x.Name)) {
            //        accInfo.UId = x.InnerText;
            //    } else if ("pId".Equals(x.Name)) {
            //        accInfo.PId = x.InnerText;
            //    } else if ("subId".Equals(x.Name)) {
            //        accInfo.SubId = x.InnerText;
            //    }
            //}
        //}
    }
    

}
