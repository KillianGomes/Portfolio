import React, { Fragment } from 'react';

const Projet = () => {
    const parfums  = JSON.parse(localStorage.getItem('parDatas'));
    let test = false ;
    let testP = false;
    if(parfums){
        test = true;
    }
    if(test && parfums.length > 0){

        testP = true;
    }

    console.log(parfums);
    return (
        <Fragment>
             <div className="jumbotron jumbotron-fluid bg-white">
                <div className="container text-center text-dark">
                    <h1 className="display-4">Bienvenue dans mon Portfolio</h1>
                    <p className="lead">Killian Gomes ,23 ans </p>
                    <p className="lead">En cour de formation développeur web et web mobile, chez L'AFPA .</p>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid bg-dark">
                <div className="container text-center text-white">
                    <h1 className="display-4">Projet K&G</h1>
                    <p className="lead">Projet Sur l'administration d'un site . Projet React</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 offset-2">
                <div className="row">
                {testP ? parfums.map((parfum,index) =>{
                    return(
                        <div className="col-md-6" key={index}>
                            <div className="card mb-3">
                                <img className="card-img-top w-60"  src={process.env.PUBLIC_URL + './images/'+ parfum.image} alt="Card" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Parfum N° 00{parfum.id}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item text-center text-muted">Marque: <strong className="text-dark">{parfum.marque}</strong></li>
                                        <li className="list-group-item text-center text-muted">Taille: <strong className="text-dark">{parfum.taille}</strong></li>
                                        <li className="list-group-item text-center text-muted">Prix: <strong className="text-dark">{parfum.prix}</strong></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    );
                })
                :'Pas de Parfum disponibles.'
            }
            </div>
                </div>
            </div>
            
        </Fragment>
         
     );
}
 
export default Projet;