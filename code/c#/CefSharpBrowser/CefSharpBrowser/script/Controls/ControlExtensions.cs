using System;
using System.Windows.Forms;

namespace CefSharpBrowser.script.Controls {
    public static class ControlExtensions {
        public static void InvokeOnUiThreadIfRequired(this Control control, Action action) {
            if (control.InvokeRequired) {
                control.BeginInvoke(action);
            } else {
                action.Invoke();
            }
        }
    }
}
