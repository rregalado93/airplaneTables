#!/bin/bash
# helpful: http://stackoverflow.com/questions/8482843/git-commit-bash-script

git add .
read -p "Commit description: " desc
git commit -m "$desc"
git remote add origin git@github.com:rregalado93/airplaneTables.git
git push -u origin master