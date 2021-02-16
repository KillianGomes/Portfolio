import React, {Component, Fragment}  from 'react';
import Liste from './Liste';
import Ajout from './Ajout';
import Edit from './Edit';

class Admin extends Component {
    state = { 
        parDatas:[
            {id:1,marque:'Narciso Rodriguez',taille:'100ml',prix:'72€',image:'narciso.jpg'},
            {id:2,marque:'Chanel',taille:'100ml',prix:'70€',image:'chanel.jpg'},
            {id:3,marque:'Jean-Paul Gaultier',taille:'75ml',prix:'50€',image:'jpgau.jpg'},
            {id:4,marque:'Paco Rabanne',taille:'50ml',prix:'51.67€',image:'one.jpg'},
        ],
        indexMod : -1,
        parfumMod: {id:-1,marque:'',taille:'',prix:'',image:''}
     }
     componentDidMount =()=>{
         let tabParfum = JSON.parse(localStorage.getItem('parDatas'));
         if(!tabParfum || tabParfum.length === 0){
             let parfums1 = localStorage.setItem('parDatas',JSON.stringify(this.state.parDatas));
             console.log(parfums1);
             this.setState({parDatas:parfums1}, function(){

                 console.log(this.state.parDatas);
             });
         }else{
             let parfums2 = JSON.parse(localStorage.getItem('parDatas')); 
                 this.setState({parDatas:parfums2});
         }
         
     }
    removeParfum = (index)=>{
        console.log(index);
       const {parDatas} = this.state
       this.setState({
        parDatas: parDatas.filter((d, i) =>{
            return i!==index
        })
        }, function(){
            localStorage.setItem('parDatas',JSON.stringify(this.state.parDatas));
        })
     }
     itemParfum = (id)=>{
        console.log(id);
        const parfs = [...this.state.parDatas]; 
        this.setState({parfumMod:parfs[id], indexMod: id});
     }

     addParfum = (newParfum) => {
         if(this.state.parDatas.length !== 0){

             newParfum.id = (this.state.parDatas[this.state.parDatas.length - 1].id + 1)
         }
        this.setState({parDatas: [...this.state.parDatas, newParfum]},function(){
            localStorage.setItem('parDatas',JSON.stringify(this.state.parDdtas));
        })
     }

     updateParfum = (parfMod) =>{
        const parfs = [...this.state.parDatas]; 
        parfs[this.state.indexMod] = {...parfMod};
        this.setState({parDatas: parfs}, function(){
            localStorage.setItem('parDatas',JSON.stringify(this.state.parDatas));
        });
     }
     
    render() { 
        console.log(this.state.parfumMod);
        return (
            <Fragment>
            <div className="jumbotron jumbotron-fluid bg-dark">
                <div className="container text-center text-white">
                    <h1 className="display-4">Admin Projet.</h1>
                </div>
            </div>
             <Ajout ajouter = {this.addParfum} />
             
             <Edit sharedParf = {this.state.parfumMod} remplacer = {this.updateParfum} />
             <Liste editParfum = {this.itemParfum} deleteParfum = {this.removeParfum} parfums = {this.state.parDatas} />
             </Fragment>
             );
    }
}
 
export default Admin;