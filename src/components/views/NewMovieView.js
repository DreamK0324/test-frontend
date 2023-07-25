import { Link } from "react-router-dom";


const NewMovieView = (props) => {
  const { handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formFirstname">
          <h2 style={{fontWeight: 'bold', fontFamily: '', fontSize: '20px', color: '#11153e'}}>
            New Movie
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
          <input type="text" name="title" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Release Date: </label>
          <input type="date" name="releaseDate" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Rate: </label>
          <input type="number" name="rate" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button type="submit">
            Submit
          </button>
          <br/>
          <br/>
          <Link to="/movies">Previous Page</Link>
          <br/>
          <br/>
          <Link to="/">Home page</Link>
          
          <br/>
          <br/>
        </form>
        {error!=="" && <p>{error}</p>}
        </div>
      </div>
    
  )
}

export default NewMovieView;