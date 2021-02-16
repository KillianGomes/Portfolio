import React, { Component, Fragment } from 'react';

class Edit extends Component {

    initParfum = {id:-1, marque:"", taille:"", prix:"", image:""};
    state = this.initParfum;

    componentDidUpdate = ()=>{
         const id = this.props.sharedParf.id;
         if(id !== this.state.id)
         this.setState(this.props.sharedParf);
    }
    modifier = (e) =>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    envoyerClick = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.remplacer(this.state);
    }
    render(){
        const {id, marque, taille, prix, image} = this.state;
        return(
            <Fragment>
                                
            <div className="modal" id="editModal">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Editer un Parfum</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
            <form>
               <div className="form-group ">
                     <label htmlFor="id">Id</label>
                     <input type="text" readOnly className="form-control" id="id" name="id" value={id} placeholder="Entrez l'Id" onChange={this.modifier}/>
                </div>
                <div className="form-group ">
                     <label htmlFor="marque">Marque</label>
                     <input type="text" className="form-control" id="marque" name="marque" value={marque} placeholder="Entrez la marque" onChange={this.modifier}/>
                </div>
                
                <div className="form-group ">
                     <label htmlFor="taille">Taille</label>
                     <input type="text" className="form-control" id="taille" name="taille" value={taille} placeholder="Entrez la taille" onChange={this.modifier}/>
                </div>
                
                <div className="form-group ">
                     <label htmlFor="prix">Prix</label>
                     <input type="text" className="form-control" id="prix" name="prix" value={prix} placeholder="Entrez le prix" onChange={this.modifier}/>
                </div>
               
                <div className="form-group ">
                     <label htmlFor="image">Image</label>
                     <input type="text" className="form-control" id="image" name="image" value={image} placeholder="Selectionner l'image" onChange={this.modifier}/>
                </div>
               
               <button type="button" className="btn btn-warning btn-block" 
               onClick={this.envoyerClick} data-dismiss="modal">Modifier</button>
            </form>
            </div>
            <div className="modal-footer">
                        </div>

                        </div>
                    </div>
                    </div>
            </Fragment>
        );
    }
}

export default Edit;