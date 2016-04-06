```javascript
renderTree () {
  for (var i = 0; i < this.props.items.length; i++) {
    this.recursiveJson(this.props.items[i].name, this.props.items[i].children);
  }
},

recursiveJson (name, children) {
  console.log("this is children", children);
 var renderChild = (json) => {
   console.log("this is json", json);
   this.recursiveJson(json.name, json.children
  )}
  return (
    <ul>
      <p> Name: {name} </p>
      {children ? children.map(renderChild) : null}
    </ul>
  )
},

render () {
  const styles = this.styles();

  return (
    <div className='mx-tree'>
      {this.renderTree()}
    </div>
  );
},

```
