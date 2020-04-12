#!/usr/bin/env bash
# this is to replace rm -fr docs;

# replace -print with -delete to activate
find ./docs/client/ -ctime +3 -print
