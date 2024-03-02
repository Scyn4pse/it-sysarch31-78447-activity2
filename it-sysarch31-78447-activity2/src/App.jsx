import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Student.jsx'
function App() {
  const students = [
    {id: 1, name: "John Doe", email: "john@doe.com"},
    {id: 1, name: "John Doe", email: "john@doe.com"},
    {id: 1, name: "John Doe", email: "john@doe.com"},
    {id: 1, name: "John Doe", email: "john@doe.com"},
    {id: 1, name: "John Doe", email: "john@doe.com"},
    {id: 1, name: "John Doe", email: "john@doe.com"},
    {id: 1, name: "John Doe", email: "john@doe.com"},
    {id: 2, name: "Juan Tan", email: "juan@tan.com"}];
  return(
    <>
    <Header/>
    <Card stud = {students} category="students"/>
    <Footer/>
    </>
  );
}

export default App
