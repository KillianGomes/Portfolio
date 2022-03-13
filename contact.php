<?php require_once('structure/header.inc');?>
<div class="container text-center text-dark">
    <h1 class="text-center">Me Contacter</h1>
</div>
<h5 class="text-center text-secondary">Formulaire de contact</h5>
    <form class="ml-5 mr-5">
    <div class="row">
    <div id="maps">
        <iframe class="ml-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.8717046794745!2d2.5242066159129495!3d48.78433951387146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60c11a79b05a1%3A0xd148f15098ba6419!2s14%20Avenue%20du%20Moulin%20%C3%80%20Vent%2C%2094490%20Chennevi%C3%A8res-sur-Marne!5e0!3m2!1sfr!2sfr!4v1606418787504!5m2!1sfr!2sfr" width="95%"aria-hidden="false" tabindex="0"></iframe>
    </div>
    <div class="col-5">
        <label for="nom">Nom*</label>
        <input type="text" class="form-control" id="nom" name="nom" placeholder="Entrez votre nom svp" required>
    </div>
    <div class="col-5">
        <label for="prenom">Prénom*</label>
        <input type="text" class="form-control" id="prenom" name="prenom"  placeholder="Entrez votre prénom svp" required>
    </div>
    <div class="col-2">
        <label for="age">Age*</label>
        <input type="number" class="form-control" id="age" name="age" placeholder="Entrez votre âge svp" min="18" required>
    </div>
    </div>
    <div class="row">
    <div class="col">
        <label for="email">Email*</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Entrez votre email svp" required>
    </div>
    <div class="col">
        <label for="phone">Téléphone*</label>
        <input type="tel" class="form-control" id="phone" name="phone" placeholder="Entrez votre numéro de téléphone svp" required>
    </div>
    </div>
    <div class="col">
        <label for="file">Piece Joint</label>
        <input type="file" class="form-control" id="info" name="info">
    </div>
    <div class="row">
    <div class="col mb-2">
        <label for="info">Information</label>
        <textarea  class="form-control" id="info" name="info" rows="5" placeholder="Entrez les Informations supplémentaires svp"></textarea>
    </div>
    </div>
    <button type="submit" class="btn btn-secondary col-12" name="soumis" >Envoyer</button>
    </form>
</div>