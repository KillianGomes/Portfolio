import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid bg-dark">
                <div className="container text-center text-white">
                    <h1 className="display-4">Me contactez.</h1>
                </div>
            </div>
            <div id="adminForm" className="container">
                <div className="row h-100 justify-content-center align-items-center">
                    <div id="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.8717046794745!2d2.5242066159129495!3d48.78433951387146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60c11a79b05a1%3A0xd148f15098ba6419!2s14%20Avenue%20du%20Moulin%20%C3%80%20Vent%2C%2094490%20Chennevi%C3%A8res-sur-Marne!5e0!3m2!1sfr!2sfr!4v1606418787504!5m2!1sfr!2sfr" width="900" height="250"aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Nom</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Addresse</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 rue"/>
                            </div>
                            <div className="col-12">
                                <label for="inputAddress2" className="form-label">Addresse 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Appartement, batiment, ou étage"/>
                            </div>
                            <div className="col-md-5">
                                <label for="inputCity" className="form-label">Ville</label>
                                <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="col-md-3">
                                <label id="zip" for="inputZip" className="form-label">Code postal</label>
                                <input type="text" className="form-control" id="inputZip"/>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Contact;
