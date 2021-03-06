﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CefSharp;

namespace CefSharpBrowser.script {
    class CefDownloadHandler : IDownloadHandler {
        //public void OnBeforeDownload(IWebBrowser chromiumWebBrowser, IBrowser browser, DownloadItem downloadItem, IBeforeDownloadCallback callback) {
        //    if (!callback.IsDisposed) {
        //        using (callback) {
        //            callback.Continue(downloadItem.SuggestedFileName, true);
        //        }
        //    }
        //}

        public void OnBeforeDownload(IBrowser browser, DownloadItem downloadItem, IBeforeDownloadCallback callback) {
            if (!callback.IsDisposed) {
                using (callback) {
                    callback.Continue(downloadItem.SuggestedFileName, true);
                }
            }
        }

        public void OnDownloadUpdated(IBrowser browser, DownloadItem downloadItem, IDownloadItemCallback callback) {
        }
    }
}
