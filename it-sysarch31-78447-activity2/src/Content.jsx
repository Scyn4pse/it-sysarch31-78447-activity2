import App from './App.jsx'
function Content(){

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
        <App stud = {students} category="students"/>
    );

}

export default Content