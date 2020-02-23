import React from "react";
import axios from "axios";
import SearchBar from "./SerachBar";

export default class SearchDisplay extends React.Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageUrl: "",
    statTitleWidth: 3,
    statBarWidth: 9,
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      specialAttack: "",
      specialDefense: ""
    },
    height: "",
    weight: "",
    errors: ""
  };

  onSearchSubmit = async term => {
    var pokemonRes, errors;
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
      pokemonRes = res;
    } catch (err) {
      errors = `Axios request failed: ${err}`;
      this.setState({ errors });
    }
    if (this.state.errors) {
      const errorDetail = "Invalid Search";
    } else {
      const name = pokemonRes.data.name;
      const imageUrl = pokemonRes.data.sprites.front_default;

      let { hp, attack, defense, speed, specialAttack, specialDefense } = "";

      pokemonRes.data.stats.map(stat => {
        switch (stat.stat.name) {
          case "hp":
            hp = stat["base_stat"];
            break;
          case "attack":
            attack = stat["base_stat"];
            break;
          case "defense":
            defense = stat["base_stat"];
            break;
          case "speed":
            speed = stat["base_stat"];
            break;
          case "special-attack":
            specialAttack = stat["base_stat"];
            break;
          case "special-defense":
            specialDefense = stat["base_stat"];
            break;
          default:
            break;
        }
      });

      const height = pokemonRes.data.height;

      const weight = pokemonRes.data.weight;

      this.setState({
        imageUrl,
        name,
        stats: {
          hp,
          attack,
          defense,
          speed,
          specialAttack,
          specialDefense
        },
        height,
        weight,
        errors
      });
    }
  };

  render() {
    if (this.state.errors) {
      return (
        <React.Fragment>
          <div className="ui container" style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <hr />
            <h1 style={{ color: "red" }}>Invalid pokemon</h1>
            <div>{this.state.errors}</div>
          </div>
        </React.Fragment>
      );
    } else if (this.state.stats.hp === "") {
      console.log(this.state.errors);
      return (
        <React.Fragment>
          <div className="ui container" style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="ui container" style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
          </div>

          <div className="col">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-5">
                    <h5>{this.state.pokemonIndex}</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className=" col-md-3 ">
                    <img
                      src={this.state.imageUrl}
                      className="card-img-top rounded mx-auto mt-2"
                      alt="img"
                    />
                  </div>
                  <div className="col-md-9">
                    <h4 className="mx-auto">{this.state.name}</h4>
                    <div className="row align-items-center">
                      <div
                        className={`col-12 col-md-${this.state.statTitleWidth}`}
                      >
                        HP
                      </div>
                      <div
                        className={`col-12 col-md-${this.state.statBarWidth}`}
                      >
                        <div className="progress">
                          <div
                            className="progress-bar "
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.hp}%`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.hp}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div
                        className={`col-12 col-md-${this.state.statTitleWidth}`}
                      >
                        Attack
                      </div>
                      <div
                        className={`col-12 col-md-${this.state.statBarWidth}`}
                      >
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.attack}%`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.attack}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div
                        className={`col-12 col-md-${this.state.statTitleWidth}`}
                      >
                        Defense
                      </div>
                      <div
                        className={`col-12 col-md-${this.state.statBarWidth}`}
                      >
                        <div className="progress">
                          <div
                            className="progress-bar "
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.defense}%`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.defense}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div
                        className={`col-12 col-md-${this.state.statTitleWidth}`}
                      >
                        Speed
                      </div>
                      <div
                        className={`col-12 col-md-${this.state.statBarWidth}`}
                      >
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.speed}%`
                            }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.speed}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div
                        className={`col-12 col-md-${this.state.statTitleWidth}`}
                      >
                        specialAttack
                      </div>
                      <div
                        className={`col-12 col-md-${this.state.statBarWidth}`}
                      >
                        <div className="progress">
                          <div
                            className="progress-bar "
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.specialAttack}%`
                            }}
                            aria-valuenow={this.state.stats.specialAttack}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.specialAttack}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div
                        className={`col-12 col-md-${this.state.statTitleWidth}`}
                      >
                        specialDefense
                      </div>
                      <div
                        className={`col-12 col-md-${this.state.statBarWidth}`}
                      >
                        <div className="progress">
                          <div
                            className="progress-bar "
                            role="progressbar"
                            style={{
                              width: `${this.state.stats.specialDefense}%`
                            }}
                            aria-valuenow={this.state.stats.specialDefense}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.stats.specialDefense}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="card-body">
                <h5 className="card-title text-center">Profile</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-6">
                        <h6 className="float-right">Height:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left">{this.state.height} ft.</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-right">Weight:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left">{this.state.weight} lbs</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
