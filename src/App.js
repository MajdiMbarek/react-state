import { Component } from 'react';
import personalImg from './pho.gif';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

      show: true,
      Person: {
        fullName: "Majdi Mbarek",
        bio: "Front end developer [react.js]",
        imgSrc: personalImg,
        profession: "Web developer"
      },
    }
    this.clickHandler = this.clickHandler.bind(this);
  }



  clickHandler() {
    this.setState(function (prevState) {
      return {
        show: !prevState.show,
      }
    });
  }

  render() {
    if (this.state.show)
      return (
        <div className="container primary">
          <button className="btn btn-primary" onClick={this.clickHandler}>Hide</button>
          <br />
          <img src={personalImg} alt="imag" width="700" height="500" />
          <h1>{this.state.Person.fullName}</h1>
          <h2>{this.state.Person.bio}</h2>
          <h2>{this.state.Person.profession}</h2>
        </div>
      );
    else return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>
      </div>
    );
  }
}

export default App;
