
import './App.css'
import './bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';




function App() {
 const sneakers = localStorage.getItem('sneakersKey')
 if(!sneakers || JSON.parse(sneakers).length === 0){
   const sneakers = [
    {id:1001, marque:"Jordan", modele:'retro 11', image:'jordan11.jpg', disponible:true, prix:220},
    {id:1002, marque:"Jordan", modele:'retro 1', image:'jordan1.jpg', disponible:false, prix:280},
    {id:1003, marque:"Jordan", modele:'retro 6', image:'jordan6.jpg', disponible:true, prix:120},
    {id:1004, marque:"Jordan", modele:'retro 4', image:'jordan4.jpg', disponible:false, prix:320}
  ]
   localStorage.setItem('sneakersKey',JSON.stringify(sneakers))
 }
 
  return (
    <>

      <Menu />
      
    </>
  );
}

export default App;
