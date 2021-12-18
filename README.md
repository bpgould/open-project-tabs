# open-project-tabs

What's better than having 34 Stack Overflow tabs open trying to fix some arcane bug? Calling it a night and saving 34 tabs to your desktop or in a junked up bookmarks folder in Chrome.

What if your computer restarts and you lose that blog from 2004 on a personal website that actually had the solution?

Perhaps you want to share a resource with a colleague that you were using a few weeks ago and you don't want to grep your search history.

<code>open-project-tabs</code> is a small node.js util package that simplifies the issue of keeping a bunch of tabs associated with a repo/project.

# Installation and Usage

You can install the package by running

<code>npm i @binarytreereversal/open-project-tabs</code>

Then you can save your tabs in a file named <code>tabs.txt</code>. You may use a .txt file stored pretty much anywhere.

You can automate this process by referencing the exported method,

<code>openTabs()</code> or

<code>openTabs(relativeFilePathToTabsTxtFile)</code>

that takes an optional parameter for the relative filepath to the .txt file containing the urls to open.

In general, though, you will most likely want to run the script from the command line via

<code>node openTabs.js</code>, once again with the optional parameter, <code>filePath</code>

<code>node openTabs.js --filePath="relativeFilePathToTabsTxtFile"</code>

# Tabs.txt File

The tabs file can be named anything and located anywhere reachable from the directory where you will run the script.

Important Note: The tabs.txt file should include newlines after each url
