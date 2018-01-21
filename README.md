# View Source for iOS

View the HTML source of any page with a quick tap, directly in Safari. Takes 30 seconds to install. No jailbreak required.

![Viewing source of Example.com](doc/images/view-source-for-ios-ipad.png "Viewing source of Example.com")



## Table of Contents
  1. [How to add to Safari](#how-to-add-to-safari)
  1. [Build from source](#build-from-source)
     1. [Prerequisites](#prerequisites)
     1. [Clone the repo](#clone-the-repo)
     1. [Install dependencies](#install-dependencies)
     1. [Build](#build)
  1. [Contribute](#contribute)
     1. [Languages](#languages)
     1. [File structure](#file-structure)



## How to add to Safari

If you're using an iPad, you might want to make sure that _Show Favourites Bar_ is toggled on under _Safari_ in the Settings app.

  1. Add this (or any other) page as a bookmark, with e.g. _View Source_ as name.
  1. Copy [this chunk of code](https://github.com/SimonAlling/view-source-for-ios/raw/master/view-source-for-ios.bookmarklet.js).*
  1. Open your bookmarks menu and navigate to the bookmark you added. Tap _Edit_, select your new bookmark, and make sure it is in the _Favourites_ folder.
  1. Tap the _Address_ field (which should contain something like `https://github.com/...`) and clear it. Paste the code you copied and tap _Done_ or similar on your keyboard.

You can now view the source code of any web page using your new bookmark, which should be visible near the top of the screen on an iPad (if _Show Favourites Bar_ is toggled on).

<sup>* Blindly copying and running code without understanding what it does or may do is generally a bad idea. If you don't trust this document, you should ask someone who knows programming for advice.</sup>



## Build from source

### Prerequisites

  * **[Node.js](https://nodejs.org) with npm is required.**
  * **If you are using Windows**, you need to install and use [Git Bash](https://git-scm.com/downloads), [Linux Subsystem](https://msdn.microsoft.com/en-us/commandline/wsl/install-win10) or similar to be able to build.


### Clone the repo

    git clone https://github.com/SimonAlling/view-source-for-ios

or download as ZIP.


### Install dependencies

In the root directory of this repo (i.e. `view-source-for-ios/`), run

    npm install

and wait for it to finish.


### Build

    npm run build-production

to build with minification.



## Contribute

### Languages

The script itself is written in [TypeScript](https://typescriptlang.org) and the stylesheet in [SASS](https://sass-lang.com).


### File structure

These files are relevant for modifying View Source for iOS:

  * `configuration.js`
  * `src/`

Also, `CONFIG_REQUIRED` in `webpack.config.js` should be updated to match `configuration.js`.
