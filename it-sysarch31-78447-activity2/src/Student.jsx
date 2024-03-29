import students from './Content.jsx'

function Student(){
    const listStuds = students.map(stud => <div className="card">
                                            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
                                            <h2 className="card-title">{stud.name}</h2>
                                            <p className="card-text">{stud.email}</p>
                                            </div>);
    return(
        <>
        {listStuds}
        </>
    );
}

export default Student