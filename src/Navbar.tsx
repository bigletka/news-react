


const Navbar = () => {


    const handleLogout = () =>{
        localStorage.clear();
        window.location.href = '/login'
    }
    return (
     <nav className="navbar">
      <div className="nav-center">
        
          
          
          <div>
            <button type="button" onClick={handleLogout}>Logout</button>
          </div>:
          
        
          
    
      </div>
    </nav>
    )
}

export default Navbar;