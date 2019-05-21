#!bin/bash
FILENAME="config.ini";
function for_in_file(){
	for i in `cat $FILENAME`
	do
		echo $i
	done
}

for_in_file;
