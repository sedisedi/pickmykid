import React from 'react';
import {Button} from '@windmill/react-ui';
import pic from './default2.png';
import {useHistory} from 'react-router-dom';

const NavbarComponent = () => {
  const history = useHistory()
  
    const btSignUp = () => {
      history.push('/signup')
    }

      const btLogIn = () => {
        history.push('/login')
    }
  
  return (
    
    // <Navbar sticky="top" bg="light" expand="lg">
    //   

    //   <Navbar.Toggle aria-controls="navbarScroll" />
    //   <Navbar.Collapse id="navbarScroll">
    //     <Nav
    //       className="mr-auto my-2 my-lg-0"
    //       style={{ maxHeight: '100px' }}

    //     >
    //       <Nav.Link href="#action1">Home</Nav.Link>
    //       <Button variant="success" style = {{marginLeft:'50px'}} onClick = {btSignUp}>Sign Up</Button>

    //       <Button variant="outline-success" style = {{marginLeft:'50px'}} onClick = {btLogIn}>Log In</Button>


    //     </Nav>

    //   </Navbar.Collapse>
    // </Navbar>

<>
<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
<div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight"><img src={pic} alt='pic2' height="20%" width="20%" /></span>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        About Us
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Contaact Us
      </a>
    </div>
    <div>
      < Button layout= 'outline' onClick = {btLogIn} className=" text-teal-200 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">LogIn</Button>
    </div>

    <div>
      < Button layout= 'outline' onClick = {btSignUp} className=" mx-10 text-teal-200 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">SignUp</Button>
    </div>

  </div>
</nav>


</>
  );


}

export default NavbarComponent;