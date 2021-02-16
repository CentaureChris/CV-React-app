import React from 'react';
import TextTransition, { presets } from "react-text-transition";
import {FaPencilAlt, FaRegTrashAlt} from 'react-icons/fa'
import {FcAddDatabase} from 'react-icons/fc'



const Liste = (props) => {

    const TEXTS = [
        "Binevenue dans l'espace administrateur!",
        "Ici vous pouvez ajouter modifier ou supprimer des articles",
        "Enjoy your Job ;)"
      ];
      const [index, setIndex] = React.useState(0);
      
        React.useEffect(() => {
          const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 
          );
        }, []); 
      

    return (
        <>  
            <h1 className="text-white bg-dark"><TextTransition 
              text={ TEXTS[index % TEXTS.length] }
              springConfig={ presets.wobbly }
            /></h1>
                            <table className="table table-striped mt-5">
                                <thead>
                                    <tr className="bg-light">
                                    <th>Article</th>
                                    <th scope="col">Titre</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Texte</th>
                                    <th scope="col">Parution</th>
                                    <th scope="col">Auteur</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    {props.rows.map((item,index)=>{
                                        return <tr key={item.id}>
                                            <td>{index+1}</td><td>{item.marque}</td><td><img src={`images/${item.image}`} alt="logo"/></td><td className="art_admin"><p>{item.modele}</p></td><td>{item.prix}</td><td>{item.disponible}</td><td><button className="btn btn-success col-12 m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={function (){
                                                props.handleEdit(index)
                                            }}>Edit <FaPencilAlt /> </button><button className="btn btn-danger col-12 m-2" onClick={()=>{
                                                (window.confirm('Confirmer la supression?'))
                                                ?props.handleDelete(index)
                                                :console.log('Supression annuler!')}
                                            }>Delete <FaRegTrashAlt/></button></td>
                                                
                                        </tr>
                                    })}
                                    
                                    
                                </tbody>
                            </table>
                            <button className="btn btn-primary col-12"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ajouter un article <FcAddDatabase/></button>
                            
        </>
    )
}

export default Liste
