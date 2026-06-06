#!/bin/sh

cmd='curl http://localhost:8880/'

i=1
while [ "$i" -le 5 ]; do
	echo "Run #$i:"
	$cmd
	if [ "$i" -lt 4 ]; then
		printf '%s\n' '---'
	fi
	i=$((i + 1))
done
