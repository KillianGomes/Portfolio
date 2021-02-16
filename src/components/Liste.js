import React from 'react';
import { Link } from 'react-router-dom';
import Edit from './Edit';


const Liste = (props)=> {
   
    return (
        <>
        <table className="table table-striped text-center">
            <thead className='thead-dark'>
                <tr>
                    <th>Id</th><th>Marque</th><th>Taille</th><th>Prix</th><th>Image</th><th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.parfums ? props.parfums.map((parfum, index) =>{
                    return(
                        <tr key={index}>
                            <td className="text-white">{parfum.id}</td>
                            <td className="text-white">{parfum.marque}</td>
                            <td className="text-white">{parfum.taille}</td>
                            <td className="text-white">{parfum.prix}</td>
                            <td> 
                                <img src={process.env.PUBLIC_URL + '/images/'+parfum.image} width="80" alt={parfum.image}/> 
                            </td>
                            <td>
                            <button className="btn btn-success" data-toggle="modal" data-target="#editModal"
                                onClick={() =>{props.editParfum(index)
                                              }}>
                                    <i className="fa fa-pen"> Editer</i>
                                </button>
                            </td> 
                            <td>
                                <button className="btn btn-danger" 
                                onClick={() =>{if(window.confirm('Etes vous sûr de vouloir supprimer'))
                                                {props.deleteParfum(index)
                                              };
                                        }}>
                                    <i className="fa fa-trash"> Supprimer</i>
                                </button>
                            </td>
                        </tr>
                    )
                })
                
                 :"Pas de donnees" }
            </tbody>

        </table>

        </>
        
     );
    
}
 
export default Liste;