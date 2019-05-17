using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CefSharp;
using CefSharp.WinForms;
using Microsoft.CSharp;
using WindowsFormsApp1.ExtBrowser;

namespace WindowsFormsApp1.ExtBrowser {
    public class ExtChromiumBrowser: ChromiumWebBrowser {

        public ExtChromiumBrowser() : base(null) {
            this.LifeSpanHandler = new CefLifeSpanHandler();
        }

        public ExtChromiumBrowser(string url) : base(url) {
            this.LifeSpanHandler = new CefLifeSpanHandler();
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
