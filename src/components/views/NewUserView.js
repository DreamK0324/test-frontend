import { Link } from "react-router-dom";


const NewUserView = (props) => {
  const { handleChange, handleSubmit, error } = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formFirstname">
          <h2 style={{fontWeight: 'bold', fontFamily: '', fontSize: '20px', color: '#11153e'}}>
            New User
          </h2>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Firstname: </label>
          <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Lastname: </label>
          <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
          <input type="text" name="email" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button type="submit">
            Submit
          </button>
          <br/>
          <br/>
          <Link to="/users">Previous Page</Link>
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

export default NewUserView;