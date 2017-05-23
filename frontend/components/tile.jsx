const React = require('react');

module.exports = React.createClass({
  getInitialState(){
    if( !this.props.adjectives ){
      return({
        name: this.props.name,
        image: this.props.image
      })
    }else{
      return ({
        image: this.props.image,
        material: this.props.material,
        adjectives: this.props.adjectives
      });
    }
  },

  getStyle(){
    return({
      backgroundImage: `url('${this.state.image}')`,
    })
  },

  toggle(){
    this.props.toggleValue( this.state.name );
  },

  getWide(){
    if( this.state.adjectives ){
      return(
        "wide-tile"
      )
    }
  },

  getText(){
    if( this.state.name ){
      return( this.state.name )
    }else{
      return(
        <div>
            {
              this.state.adjectives
            }
            <br></br>
            {
              this.state.material
            }
        </div>
      )
    }
  },

  render(){
    return(
      <div className = { "tile " + this.getWide() }>
        <div className = "image" style = { this.getStyle() } ></div>
        <div className = "name">
          <input type = "checkbox" onChange = { this.toggle }></input>
          <div className = "label small-type" > {
              this.getText()
            } </div>
        </div>
      </div>
    )
  }
})
