const React = require('react');

module.exports = React.createClass({
  getInitialState(){
    return({
      name: this.props.type,
      next: this.props.next
    })
  },

  componentWillReceiveProps( props ){
    this.setState({ name: props.name, next: props.next })
  },

  getStyle(){
    if( this.state.next ){
      return({
        float: "left"
      })
    }else{
      return({
        float: "right"
      })
    }
  },

  getArrow(){
    if( this.state.next ){
      return({
        backgroundImage: "url('./assets/images/buttons/zuruck.png')"
      })
    }else{
      return({
        backgroundImage: "url('./assets/images/buttons/weiter.png')"
      })
    }
  },

  getName(){
    if( this.state.next ){
      return "ZURUCK"
    }else{
      return "WEITER"
    }
  },

  floatText(){
    if( this.state.next ){
      return({
        float: "right",
        marginLeft: "10px",
      })
    }else{
      return({
        float: "left",
        marginRight: "10px",
      })
    }
  },

  render(){
    return(
      <div className = "button" onClick = { this.props.toggleNext } style = { this.getStyle() }>
        <div className = "label purple" style = { this.floatText() }>
          {
            this.getName()
          }
        </div>
        <div className = "arrow" style = { this.getArrow() }>
        </div>
      </div>
    )
  }
})
