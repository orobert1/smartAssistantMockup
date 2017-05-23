
const React = require('react');
const Head = require('./head');
const Tile = require('./tile')
const Button = require('./button.jsx');
const Main = require('./main');

module.exports = React.createClass({
  getInitialState(){
    return(
      {
        next: false,
        people: [
          { image: "./assets/images/people/1.png", name: "Eckig" },
          { image: "./assets/images/people/2.png", name: "Rund" },
          { image: "./assets/images/people/3.png", name: "Oval" },
          { image: "./assets/images/people/4.png", name: "Herzformig" }
        ],
        glasses: [
          {
            image: "./assets/images/glasses/1.png",
            material: "Metall-Fassungen",
            adjectives: "Bruchsicher & rohfrei:"
           },
          {
            image: "./assets/images/glasses/2.png",
            material: "Kunststoff-Fassungen",
            adjectives: "Farefroh & extravagant"
           },
          {
            image: "./assets/images/glasses/3.png",
            material: "Titan-Fassungen",
            adjectives: "Leicht & stabil:"
          }
        ],
        main: [
          {
            image: "./assets/images/glasses-full/1.png",
            price: "114,90"
          },
          {
            image: "./assets/images/glasses-full/1.png",
            price: "39,90"
          }
        ],
        checked: {}
      }
    )
  },

  getNextStyle(){
    if( this.state.next ){
      return({
        left: "0%"
      })
    }else{
      return({
        left: "100%"
      })
    }
  },

  getPrevStyle(){
    if( this.state.next ){
      return({
        left: "-100%"
      })
    }else{
      return({
        left: "0%"
      })
    }
  },

  toggleValue( name ){
    let checked = this.state.checked
    if( this.state.checked[ name ] ){
      delete checked[ name ];
    }else{
      let checked = this.state.checked;
      checked[ name ] = true;
    }
    this.setState({ checked: checked });
  },

  content(){
    return(
      <div className = "content-container">
        <div className = "prev" style = { this.getPrevStyle() }>
          {
            this.people()
          }
        </div>
        <div className = "next" style = { this.getNextStyle() }>
          {
            this.glasses()
          }
        </div>
      </div>
    )
  },

  people(){
    return this.state.people.map(
      function( el, index ){
        return(
          <Tile toggleValue = { this.toggleValue } key = { `people-${index}` } image = { el.image } name = { el.name } ></Tile>
        )
      }.bind( this )
    )
  },

  glasses(){
    return this.state.glasses.map(
      function( el, index ){
        return(
          <Tile key = { `glasses-${index}` } material = { el.material } image = { el.image } adjectives = { el.adjectives } toggleValue = { this.toggleValue }></Tile>
        )
      }.bind( this )
    )
  },

  toggleNext(){
    this.setState({ next: !this.state.next });
  },

  button(){
    return(
      <div className = "button-container full-width">
        <Button next = { this.state.next } toggleNext = { this.toggleNext } type = "Weiter"></Button>
      </div>
    )
  },

  main(){
    return this.state.main.map(
      function( el, index ){
        return(
          <Main price = { el.price } index = { index } key = { index } ></Main>
        )
      }.bind( this )
    );
  },

  render(){
    return(
      <div className = "page">
        <div className = "banner"></div>
        <h2 className = "centered full-width purple"> {"Welche Gesichtsform haben Sie?"} </h2>
        {
          this.content()
        }
        {
          this.button()
        }
        <h2 className = "full-width centered white purple-background float-left main-head">
          Produkte, die Ihren Wünschen entsprechen
        </h2>
        <div className = "main-container">
          {
            this.main()
          }
        </div>
      </div>
    )
  }
})
