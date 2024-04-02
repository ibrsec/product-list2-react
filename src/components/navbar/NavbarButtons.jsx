

import React  from 'react' 
import navStyle from './NavbarButtons.module.scss';

const NavbarButtons = (props) => {   
console.log(props);
const handleCategoryButtonClick = (e) => {
  handleCategoryButtonClick(
    
  );
}




  return (
    <nav className={navStyle.buttons + " d-flex align-items-center justify-content-center gap-2 container flex-wrap text-nowrap py-3"}>
        {
            Object.keys(props.allProducts)?.map(button => (
              <button key={button} className='btn btn-dark' id={button} onClick={handleCategoryButtonClick}>{button}</button>
            ))
        }
    </nav>
  )
}

export default NavbarButtons;