# Flux Notes
* The dispatcher is pretty much a broadcast method - it sort of says - 'anybody who's listening, i'm doing this, here's some data
* action targets dispatcher, and dispatcher targets anyone who is listening
* Who is typically listening? The __store__
* The store is a set of functionality that is connected to one component.

## Example
* You have a react component that has a click handler. Every time you click it, it shoots out an action that has a payload. This fires an action in the 'app actions folder'. It then wraps up this payload inside an object that


## THE Flow
![Image of Flux Flow]
(https://cask.scotch.io/2014/10/V70cSEC.png)

* So in a React Component, you require in the View Actions. And Also something called 'api utils' `Gatling/utils/Api.js` On this component, methods on each of these are called.
* These view or server actions, require the `AppDispatcher` and calls a bunch of methods on the appDispatcher (or API Utils)
* Then in the app Dispatcher, you require in paylodSources (this is a bunch of constants). Here you call two different types of methods. `HandleServerAction`, and `HandleViewAction`
* App Dispatcher calls a `handleServerAction(action)` or a `handleViewAction(action)` the `action` that gets passed in is
