using System;
using System.Xml;

namespace CefSharpBrowser.script.tools {
    class XmlMgr {
        private XmlDocument document = null;
        private XmlNodeList rootChilds = null;
        public void LoadXml(string xmlPath) {
            if (document == null) {
                document = new XmlDocument();
            }
            document.Load(xmlPath);
        }
        public void GetRootNodes(string rootName) {
            if (!String.IsNullOrEmpty(rootName) && document!=null) {
                XmlNode root = document.SelectSingleNode(rootName);
                if (root != null) {
                    rootChilds = root.ChildNodes;
                }
            }
        }

        public XmlNode GetNodeById(string nodeId) {
            XmlNode node = null;
            foreach (XmlNode child in rootChilds) {
                XmlElement xlt = null;
                xlt = child as XmlElement;
                if (xlt != null) {
                    if (nodeId.Equals(xlt.GetAttribute("id"))){
                        node = xlt;
                        break;
                    }
                }
            }
            return node;
        }
    }
}
