### Navigating through Folders
* `cd` => 'Change Directory', do `cd folderName` to change into that folderName
* `cd ..` => go up a level in the folder structure
* `touch ` => create a new file, ex: `touch filename.js`
* `ls` => list contents of current directory (folder)
* `mkdir` => make a new directory, ex: `mkdir myNewFolder`

### Creating a new Repository
* Make a new Repository on github.com
* Copy the URL from github
* Create a new Directory on your computer `mkdir whatever`
* get into that directory: `cd whatever`
* Initialize that directory as a git repository `git init`
* Link that directory to your github repository `git remote add origin <url that you pasted from github>`

### Adding, Committing and Pushing
* Once you've added files or made changes, you want to add those changes to git
* Use `git add .` to add all the files, or `git add filename.js` to add a specific files
* Commit that code, add a message `git commit -m "my commit message"`
* To push the code up to github use `git push` or `git push origin master`
