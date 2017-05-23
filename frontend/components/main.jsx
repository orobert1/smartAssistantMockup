const React = require('react');
const ListItem = require('./listItem');

module.exports = React.createClass({
  getImage(){
    return({
      backgroundImage: "url( './assets/images/glasses-full/1.png' )"
    })
  },
  render(){
    return(
      <div className = "main">
        <div className = "image" style = { this.getImage() }></div>
        <div className = "funchal">
          <h2>Funchal</h2>
          <ListItem green = {true} name = "Brillentyp: Damen, Herren"></ListItem>
          <ListItem green = {true} name = "Rahmentyp: Randlose Brille"></ListItem>
          <ListItem green = {true} name = "Eckiger Rahmen"></ListItem>
          <ListItem green = {true} name = "Runder Rahmen"></ListItem>
          <ListItem green = {true} name = "Stil: casual, extravagant"></ListItem>
          <ListItem grey = {true} name = "Einstarkenbrille"></ListItem>
          <ListItem grey = {true} name = "Material: Metal"></ListItem>
        </div>
        <div className = "price-container">
          <div className = "price centered">
              Rahmen inkl. Glases & Service <br></br>
            <h2 className = "dark-purple">
              ab { this.props.price } €
            </h2>
          </div>
          <div className = "button" style = {{ backgroundImage: "url('./assets/images/buttons/zum-produkt.png')" }}></div>
        </div>
      </div>
    )
  }
})
