import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
        Welcome to the HomePage
      </h1>
    
      <br/>
      <div style={{ marginBottom: '10px' }}>
        <Link to="/employees">All Employees</Link>
      </div>
      <br/>
      <div>
        <Link to="/tasks">All Tasks</Link>
      </div>
    </div>
  );    
}




export default HomePageView;
