const React = require('react');

const Icon = require('./Icon');
const Styles = require('../constants/Style');

const Tree = React.createClass({
  propTypes: {
    iconColor: React.PropTypes.string,
    items: React.PropTypes.array,
    handleChildClick: React.PropTypes.func
  },

  getDefaultProps () {
    return {
      iconColor: Styles.Colors.PRIMARY
    };
  },

  getInitialState () {
    return {};
  },
  
  generateRandomId () {
    return Math.floor(Math.random() * 10)
  },

  _handleParentClick (id, children) {
    console.log("this is id", id);
    this.setState({
      [id]: !this.state[id]
    });

    if (!children) {
      this.props.handleChildClick()
    }
  },

  _renderTree (level, id = 0) {
    const levelId = id + 1;
    const styles = this.styles();
    const random = this.generateRandomId()
    let childId = 0;

    return level.map((obj, i) => {
      const objectNameId = obj.name.replace(/\s+/g, '-').toLowerCase();
      childId++;
      // console.log("this is child id", childId, "this is obj", obj, "this is parentId", levelId );

      return (
        <ul key={i} style={styles.list}>
          <li key={obj.id}>
            <div onClick={this._handleParentClick.bind(null, levelId + '-' + childId + '-' + objectNameId, obj.children)} style={styles.parent}>
              {obj.children && obj.children.length ? (
                <div style={styles.triangle}>
                  <Icon size={20} type={this.state[levelId + '-' + childId + '-' + objectNameId] ? 'caret-down' : 'caret-right'} />
                </div>
              ) : null}
              <Icon
                size={25}
                style={styles.icon}
                type={obj.icon || (obj.children && obj.children.length ? 'list-view' : 'document')}
              />
              <span style={styles.name}>
                {obj.name}
              </span>
            </div>
            {this.state[levelId + '-' + childId + '-' + objectNameId] && obj.children && obj.children.length ? this._renderTree(obj.children, levelId) : null}
          </li>
        </ul>
      );
    });
  },

  render () {
    return (
      <div className='tree'>
        {this._renderTree(this.props.items)}
      </div>
    );
  },

  styles () {
    return {
      icon: {
        color: this.props.iconColor
      },
      iconHolder: {
        border: '1px solid ' + Styles.Colors.ASH,
        padding: 2,
        borderRadius: 5,
        display: 'inline-block'
      },
      list: {
        listStyleType: 'none',
        margin: 0,
        paddingLeft: 20
      },
      triangle: {
        display: 'inline-block',
        position: 'absolute',
        left: -20,
        top: 3
      },
      parent: {
        cursor: 'pointer',
        position: 'relative',
        listStyleType: 'none',
        fontFamily: Styles.Fonts.THIN,
        margin: '15px 0'
      }
    };
  }

});

module.exports = Tree;
