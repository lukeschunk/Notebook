## Deploying

* Make a new release in Sabatoge
* Link PR and Issues
* Brief description and to test 
* Put :octocat: on it - this means we haven't merged our code yet,
* Wait for a :shipit: 
* Change :octocat: to :rocket:
* merge
* Pull Down changes
* Bump version in `version.rb` & `package.json`
* commit those changes "bumped version..."
* run `npm run compile`  - this does webpack and other pre release things* 
* run `bundle exec rake release`

* open Longbow
* pull down changes if there are any
* run `bundle update mx-robinhood`
* Commit changes and push back up 

* Now we're ready to deploy Longbow
* `bundle exec treb sand deploy` - deploys it to sand 
* test it (while you're deploying to QA)
* Pull down QA,
* deploy to qa using `bundle exec treb qa deploy`
