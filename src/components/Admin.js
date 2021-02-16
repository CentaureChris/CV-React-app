import React, { Component } from "react";
import Liste from "./Liste";
import Edit from "./Edit";
import Ajout from "./Ajout";
import { toast } from "react-toastify";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: JSON.parse(localStorage.getItem("sneakersKey")),
      editArt: { id: "", marque: "", modele: "", disponible: "", prix: "" },
    };
  }

  componentDidMount = () => {
    let sneakers1 = JSON.parse(localStorage.getItem("sneakersKey"));
    if (!sneakers1 || sneakers1.length === 0) {
      localStorage.setItem("sneakersKey", JSON.stringify(this.state.sneakers));
      let sneakersRecup = JSON.parse(localStorage.getItem("sneakersKey"));
      this.setState({ sneakers: sneakersRecup });
    } else {
      let sneakers2 = JSON.parse(localStorage.getItem("sneakersKey"));
      this.setState({ sneakers: sneakers2 });
    }
  };
  removeArticle = index => {
    let newArtList = [...this.state.sneakers];
    const article = newArtList.filter((v, i) => {
      return i !== index;
    });
    this.setState({ sneakers: article }, () => {
      localStorage.setItem("sneakersKey", JSON.stringify(this.state.sneakers));
    });
    toast("Article supprimer");
  };
  addArticle = newArt => {
    let clonesneakers = [...this.state.sneakers, newArt];
    this.setState({ sneakers: clonesneakers });
  };
  handleItem = index => {
    const aEdit = this.state.sneakers[index];
    this.setState({ editArt: aEdit });
  };
  editArticle = art => {
    const newArtList = this.state.sneakers;
    newArtList.forEach((item, index) => {
      if (art.id === item.id) {
        newArtList[index] = art;
      }
    });
    this.setState({ editArt: art });
    localStorage.setItem("sneakersKey", JSON.stringify(this.state.sneakers));
  };
  affich = () => {
    const sauv = localStorage.getItem("sneakersKey");
    if (!sauv) {
      localStorage.setItem("sneakersKey", JSON.stringify(this.states.sneakers));
    }
  };
  render() {
    return (
      <>
        <Liste
          rows={this.state.sneakers}
          handleDelete={this.removeArticle}
          handleEdit={this.handleItem}
        />
        <Edit article={this.state.editArt} handleSubmit={this.editArticle} />
        <Ajout handleSubmit={this.addArticle} />
      </>
    );
  }
}

export default Admin;
