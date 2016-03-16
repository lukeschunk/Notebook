## Deploying to Open Source
* Merge, pull down master like normal, then
* package.json, bump the version 
* don't run webpack 
* `npm run release` - this runs eslint on the source folder and attempts to package everything up and move it to the distribution public folder
* `npm publish` 
* Update ChangeLog,
* Update Documentation for Select Component 
* Checkout gh-pages branch
* update package.json for gh-pages
* run webpack -p, then push everything up to gh-pages
* you do run `webpack -p` on the docs

if you get a weird error: `so `eslint src` and then `babel src --out-dir dist`

`
