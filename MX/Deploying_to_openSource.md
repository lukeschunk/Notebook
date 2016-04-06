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



```javascript
[
  {
    name: 'app/mobile/smoke/tour',
    id: 29850982
  },
  {
    name: 'app/mobile/sanity/flight',
    id: 2958091
  },
  {
    name: 'product/data/sales/scripts',
    id: 938294
  },
  {
    name: 'product/marketing/stable/aggregation',
    id: 38509285
  },
  {
    name: 'engineering/oss/styles/compile',
    id: 3985098
  }
  
]

```
[
  {
    name: 'app',
    children: 
    [
      {
        name: 'mobile',
        children: 
        [
          {
            name: 'sanity',
            children: ['tour'] //tour and any other ones that have the same parents
          },
          {
            name: 'sales',
            children: ''
          }
        ]
      }
    ]
  },
  {
    name: 'product',
    children: '' //etc
  }
]
