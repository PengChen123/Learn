using CefSharp;
using System;
using System.Windows.Forms;

namespace CefSharpBrowser.script {
    public class CefKeyboardHandler : IKeyboardHandler {
        const int KEY_F5 = 0x74;
        const int KEY_F12 = 0x7B;
        public bool OnKeyEvent(IWebBrowser chromiumWebBrowser, IBrowser browser, KeyType type, int windowsKeyCode, int nativeKeyCode, CefEventFlags modifiers, bool isSystemKey) {
            if (type == KeyType.KeyUp) {
                switch (windowsKeyCode) {
                    case KEY_F5:
                            browser.Reload();
                        break;
                    case KEY_F12:
                            browser.ShowDevTools();
                        break;
                }
            }
            return false;
        }

        public bool OnPreKeyEvent(IWebBrowser chromiumWebBrowser, IBrowser browser, KeyType type, int windowsKeyCode, int nativeKeyCode, CefEventFlags modifiers, bool isSystemKey, ref bool isKeyboardShortcut) {
            var control = chromiumWebBrowser as Control;
            var state = PreProcessControlState.MessageNotNeeded;
            control.Invoke(new Action(() => {
                var msg = new Message {
                    HWnd = control.Handle,
                    Msg = KEY_F5,
                    WParam = new IntPtr(windowsKeyCode),
                    LParam = new IntPtr(nativeKeyCode)
                };
                var processed = Application.FilterMessage(ref msg);
                if (processed) {
                    state = PreProcessControlState.MessageProcessed;
                } else {
                    state = control.PreProcessControlMessage(ref msg);
                }
            }
            ));
            if (state == PreProcessControlState.MessageProcessed) {
                return true;
            }
            return false;
        }
    }
}
