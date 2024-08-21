import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div style={{textAlign:'center'}}>
        
        <h1 style={{fontWeight:'bold'}}>404</h1>
        <p>Error.Not Found!</p>
        <Link className="btn btn-danger " to={'/'}>Go Back </Link>
        
    </div>
  )
}

export default NotFound