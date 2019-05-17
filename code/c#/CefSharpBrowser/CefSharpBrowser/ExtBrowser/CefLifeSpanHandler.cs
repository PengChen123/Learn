using System;
using CefSharp;

namespace WindowsFormsApp1.ExtBrowser {
    public class CefLifeSpanHandler:ILifeSpanHandler {
        public CefLifeSpanHandler() {
        }
        public bool DoClose(IWebBrowser chromiumWebBrowser, IBrowser browser) {
            if (browser.IsDisposed || browser.IsPopup) {
                return false;
            }
            return true;
        }

        public void OnAfterCreated(IWebBrowser chromiumWebBrowser, IBrowser browser) {
        }

        public void OnBeforeClose(IWebBrowser chromiumWebBrowser, IBrowser browser) {
        }

        public bool OnBeforePopup(IWebBrowser chromiumWebBrowser, IBrowser browser, IFrame frame, string targetUrl, string targetFrameName,
            WindowOpenDisposition targetDisposition, bool userGesture, IPopupFeatures popupFeatures, IWindowInfo windowInfo,
            IBrowserSettings browserSettings, ref bool noJavascriptAccess, out IWebBrowser newBrowser) {

            ExtChromiumBrowser webBrowser = chromiumWebBrowser as ExtChromiumBrowser;
            Action action = new Action(() => {
                NewWindowEventArgs e = new NewWindowEventArgs(windowInfo, targetUrl);
                webBrowser.OnNewWindow(e);
            });
            webBrowser.Invoke(action);
            newBrowser = null;
            return true;
        }
    }
}
