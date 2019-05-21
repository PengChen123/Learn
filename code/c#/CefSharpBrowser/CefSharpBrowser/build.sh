#!bin/bash
FILENAME="config.ini";
function for_in_file(){
	for i in `cat $FILENAME`
	do

		echo $i
	done
}

for_in_file;



del *.pdb
del CefSharp.Core.xml CefSharp.WinForms.XML CefSharp.XML
del CefSharpBrowser.application
del CefSharpBrowser.exe.config
del CefSharpBrowser.exe.manifest
del debug.log README.txt
rd /S /Q  app.publish
copy /y .\locales\zh-CN.pak .\ 
del /S /Q .\locales\
move /y .\zh-CN.pak .\locales\