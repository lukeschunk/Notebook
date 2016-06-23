```ruby
def destroy
  if @device.destroy
    render :nothing => true, :status => 204
  else
    render json: {error: "DEVICE Log could not be destroyed."}, status: 422
  end
end
```

```javascript
deviceDeleted (deviceId, status) {
  const type = status === 'connected' ? ActionTypes.CONNECTED_DEVICE_DELETED : ActionTypes.DISCONNECTED_DEVICE_DELETED;

  AppDispatcher.handleServerAction({
    type,
    deviceId
  });
},
```

## Deleted Comments from API
```javascript

$.post('/devices/' + device_id + '/select?checked=' + checkedBox.checked, function() {
  refreshConnectedDevices();
});


function deviceSelected(checkedBox) {
  var device_id = checkedBox.name;
  console.log("Selected Device: " + device_id);
  $.post('/devices/' + device_id + '/select?checked=' + checkedBox.checked, function() {
    refreshConnectedDevices();
  });
  return false;
}
```
