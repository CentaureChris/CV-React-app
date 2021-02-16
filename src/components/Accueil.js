import React from 'react';


const Accueil =()=> {
    

  
    
        const sneakers = JSON.parse(localStorage.getItem('sneakersKey'))
        // let articles = this.props.defaultPage
        // if(!articles || articles.length === 0){
        //     articles = this.props.data
        // }
        // console.log(articles)
        // console.log(this.props.defaultPage)
        
        return (
            
            <>
              <div className="bg-light p-5">
                <div className="container text-center">
                    <h1 className="display-4">My Blog</h1>
                    <p className="lead" style={{height: "10%"}}>Bienvenue sur mon Blog</p>
                    <p>Vous trouverez sur la page d'accueil un ensemble d'article sur le web.<br/>
                    Dans l'onglet presentation vous retrouverez mon cv et dans l'onglet contact toutes mes coordonées
                    </p>
                </div>
            </div>
            <div className="container">
                
                <div className=" row row-cols-1 row-cols-md-2 g-4">      
                {sneakers.map((item,index)=>{
                    return <div key={item.id}>
                                <div className="col ">
                                    <div className="card p-2 card text-white bg-info mb-3">
                                    <small>Article{index+1}:</small>
                                    <img src={`images/${item.image}`} alt="logo"/>
                                        <div className="card-body">
                                            <h5 className="card-title"> {item.prix} </h5>
                                            <p className="card-text">{item.marque}</p>
                                            <p className="card-text"><small className="text-muted">Auteur: {item.modele}</small></p>
                                            <p className="card-text"><small className="text-muted ">Parution: {item.disponible}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                })}
                 </div>
            </div>
            
                
            </>
          );
    }


 
export default Accueil;