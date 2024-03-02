import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Student from './Student.jsx'
function App() {
  const students = [
    {id: 1, name: "Chiara Canque", email: "chiara@canque.com"},
    {id: 2, name: "Miles Sabal", email: "miles@sabal.com"},
    {id: 3, name: "Dominic Restauro", email: "dom@res.com"},
    {id: 4, name: "Victor Cambaya", email: "vic@tor.com"},
    {id: 5, name: "Rexis Tinga", email: "rex@tinga.com"},
    {id: 6, name: "Louie Natividad", email: "louie@nati.com"},
    {id: 7, name: "Matt Hernandez", email: "matt@hern.com"},
    {id: 8, name: "Sol Nacario", email: "sol@nacario.com"}];
  return(
    <>
    <Header/>
    <Student stud = {students} category="students"/>
    <Footer/>
    </>
  );
}

export default App
