import React from 'react';
import {Nav,NavLink,Bars,NavMenu} from './Navbarelements';


const Navbar = () => {
    return (
        <Nav>
            <NavLink to ="/">
                <h1>logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink t0 ="/coins" activestyle>
                    Coins
                </NavLink>
                
                <NavLink t0 ="/exchanges" activestyle>
                    Exchanges
                </NavLink>
                
                <NavLink t0 ="/nfts" activestyle>
                    NFT
                </NavLink>
                
                <NavLink t0 ="/wallets" activestyle>
                    Wallets
                </NavLink>
                
                <NavLink t0 ="/pools" activestyle>
                    Coins
                </NavLink>

                <NavLink t0 ="/accounts" activestyle>
                    Accounts
                </NavLink>

            </NavMenu>

        </Nav>
    )
};

export default Navbar;

