# open-project-tabs

What's better than having 34 Stack Overflow tabs open trying to fix some arcane bug? Calling it a night and saving 34 tabs to your desktop or in a junked up bookmarks folder in Chrome.

Perhaps you want to share a resource with a colleague that you were using a few weeks ago and you don't want to grep your search history?

<code>open-project-tabs</code> is a small node.js util script that simplifies the issue of keeping a bunch of tabs associated with a repo/project.

# Installation and Setup

You can install the npm module by running

<code>npm i --save-dev @binarytreereversal/open-project-tabs</code>

next, run the setup file

<code>node node_modules/@binarytreereversal/open-project-tabs/setup.js</code>

This will copy two files to your root directory (<code>openTabs.js</code> and <code>tabs.txt</code>).

Then you can save your urls in <code>tabs.txt</code>. You may use a .txt file stored pretty much anywhere, but you will have to pass the <code>filePath</code> argument when running the script if you choose to save <code>tabs.txt</code> somewhere other than the root directory.

# Usage

Simply run

<code>node openTabs.js</code>

to open all of the URLs in <code>tabs.txt</code>

or with the optional parameter, <code>filePath</code>:

<code>node openTabs.js --filePath="relativeFilePathToTabsTxtFile"</code>

# Tabs.txt File

The tabs file can be named anything and located anywhere reachable from the directory where you will run the script.

Important Note: The tabs.txt file should include newlines after each url.
