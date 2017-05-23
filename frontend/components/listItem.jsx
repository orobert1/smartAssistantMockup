const React = require('react');

module.exports = React.createClass({
  getStyle(){
    if( this.props.green ){
      return({
        backgroundImage: "url('./assets/images/buttons/green-check.png')"
      })
    }else{
      return({
        backgroundImage: "url('./assets/images/buttons/grey-dot.png')"
      })
    }
  },
  render(){
    return(
      <div className = "list-item">
        <div className = "list-icon" style = { this.getStyle() }></div>
        {
          this.props.name
        }
      </div>
    )
  }
})
