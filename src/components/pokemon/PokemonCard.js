import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class PokemonCard extends Component {
  state = {
    url: "",
    name: "",
    img: "",
    pokemonIndex: ""
  };
  async componentDidMount() {
    const { name, url } = this.props;
    const response = await axios.get(url);
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const img = response.data.sprites.front_default;
    this.setState({ url, name, img, pokemonIndex });
  }
  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <Link to={`pokemon/${this.state.pokemonIndex}`}>
          <div id="hover" className="card">
            <h5 className="card-header">{this.state.pokemonIndex}</h5>
            <img src={this.state.img} alt="img" />
            <div className="card-body mx-auto">
              <h6 className="card-title">{this.state.name}</h6>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
