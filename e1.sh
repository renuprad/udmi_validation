#!/bin/bash

pwd
cd devices
pwd
echo "in 'devices' folder"

var1="p1"
name1="m1"
mydir="$(basename $PWD)"
echo "$var1"
echo ="$name1"
echo ="$mydir"

for dir in */ ; do
	pwd
	touch D2.txt
	chmod 777 D2.txt
	var1="$dir"
	cd "$var1"
	pwd
	if [ -f "metadata.json" ]; then
		name1="$(grep gateway_id metadata.json)"
	fi
        cd ..	
	echo "$var1,$name1" >> D2.txt
done
echo "$var1" >> D2.txt
echo "$mydir" >> D2.txt
echo "$name1" >> D2.txt
###########
