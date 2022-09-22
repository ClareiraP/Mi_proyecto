import React from 'react';

export const NavBar=()=>{
    return(
            <div className='ContainerIns'>
               <nav className='Nav'>
                    <h1>Tienda scout</h1>
                
                     <ul className='Lista'>
                        <li>
                         <a className='Ins' href='#'>Insignia 1</a>
                        </li>
                         <li>
                         <a className='Ins' href='#'>Insignia 2</a>
                        </li>
                         <li>
                         <a className='Ins' href='#'>Insignia 3</a>
                        </li>
                    </ul>
                </nav>
            </div>

    );
}
export default NavBar;