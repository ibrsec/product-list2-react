

import React  from 'react' 
import navStyle from './NavbarButtons.module.scss';

const NavbarButtons = ({allProducts,setChoosedCat}) => {    

console.log(allProducts);
const handleCategoryButtonClick = (e) => {
  setChoosedCat(e.target.id)

}

  return (
    <nav className={navStyle.buttons + " d-flex align-items-center justify-content-center gap-2 container flex-wrap text-nowrap py-3"}>
        {
            Object.keys(allProducts)?.map(button => (
              <button key={button} className='btn btn-dark' id={button} onClick={handleCategoryButtonClick}>{button}</button>
            ))
        }
    </nav>
  )
}

export default NavbarButtons;