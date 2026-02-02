import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import Footer from './Footer'; 

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="¡Bienvenido a Savage Tienda Online!" />
      <Footer /> {/* ✅ Añade esta línea */}
    </>
  );
}

export default App;