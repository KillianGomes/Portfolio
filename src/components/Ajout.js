import React, { Component, Fragment } from 'react';

class Ajout extends Component {

    initParfum = {id:1, marque:"", taille:"", prix:"", image:""};
    state = this.initParfum;
    modifier = (e) =>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    envoyer = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.ajouter(this.state);
    }
    render(){
        const {marque, taille, prix, image} = this.state;
        return(
            <Fragment>
            <div className="text-right">
            
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus"></i>Ajouter</button>
            </div>
                                
            <div className="modal" id="myModal">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Ajout d'un Parfum</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
            <form>
                <div className="form-group ">
                     <label htmlFor="marque">Marque</label>
                     <input type="text" className="form-control" id="marque" name="marque" value={marque} placeholder="Entrez la marque" onChange={this.modifier}/>
                </div>
                
                <div className="form-group ">
                     <label htmlFor="taille">Taille</label>
                     <input type="text" className="form-control" id="taille" name="taille" value={taille} placeholder="Entrez le modèle" onChange={this.modifier}/>
                </div>
                
                <div className="form-group ">
                     <label htmlFor="prix">Prix</label>
                     <input type="text" className="form-control" id="prix" name="prix" value={prix} placeholder="Entrez le pays" onChange={this.modifier}/>
                </div>
               
                <div className="form-group ">
                     <label htmlFor="image">Image</label>
                     <input type="text" className="form-control" id="image" name="image" value={image} placeholder="Selectionner l'image" onChange={this.modifier}/>
                </div>
               
               <button type="button" className="btn btn-primary btn-block" 
               onClick={this.envoyer} data-dismiss="modal">Soumettre</button>
            </form>
            </div>
            <div className="modal-footer">
            {/* <button type="button" className="btn btn-primary" data-dismiss="modal"></button> */}
                        </div>

                        </div>
                    </div>
                    </div>
            </Fragment>
        );
    }
}

export default Ajout;
