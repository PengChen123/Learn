using System;
using CefSharp;
using CefSharp.WinForms;
using CefSharpBrowser.script;

namespace CefSharpBrowser {
    public class ExtChromiumBrowser: ChromiumWebBrowser {

        public ExtChromiumBrowser() : base(null) {
            this.LifeSpanHandler = new CefLifeSpanHandler();
            this.KeyboardHandler = new CefKeyboardHandler();
            this.DownloadHandler = new CefDownloadHandler();
            

        }

        public ExtChromiumBrowser(string url) : base(url) {
            this.LifeSpanHandler = new CefLifeSpanHandler();
            this.KeyboardHandler = new CefKeyboardHandler();
            this.DownloadHandler = new CefDownloadHandler();
        }

        public event EventHandler<NewWindowEventArgs> StartNewWindow;
        public void OnNewWindow(NewWindowEventArgs e) {
            if (StartNewWindow != null) {
                StartNewWindow(this, e);
            }
        }
    }
    public class NewWindowEventArgs : EventArgs {
        private IWindowInfo _windowInfo;
        public IWindowInfo WindowInfo { get => _windowInfo; set => _windowInfo = value; }
        public string Url { get; set; }

        public NewWindowEventArgs(IWindowInfo windowInfo, string url) {

            _windowInfo = windowInfo;
            this.Url = url;
        }
    }
}
