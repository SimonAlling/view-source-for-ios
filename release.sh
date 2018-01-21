#!/bin/bash

if [[ "$(git rev-parse --abbrev-ref HEAD)" != 'master' ]]; then
    echo 'Not on master branch.'
else
    echo
    echo "You are about to create a release from the current state of the master branch."
    read -p "If you have merged everything that should be included, press Enter to continue ..."

    echo
    echo "Deleting any *.bookmarklet.js files ..."
    rm -f *.bookmarklet.js
    if [ $? -gt 0 ]; then
        exit 1
    fi

    echo "Building ..."
    npm run build-production
    if [ $? -gt 0 ]; then
        exit 1
    fi

    echo
    echo "Adding and committing generated bookmarklet ..."
    echo
    git add -f *.bookmarklet.js
    if [ $? -gt 0 ]; then
        exit 1
    fi
    
    git commit -em "Release v"
    if [ $? -gt 0 ]; then
        exit 1
    fi
    
    echo
    echo "Done! Tag and push to publish."
fi
