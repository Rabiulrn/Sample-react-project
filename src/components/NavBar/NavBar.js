import React from 'react';
import "./NavBar.css"

const NavBar = () => {
    return (
        <div >
            <div className="extra">
                <p>Get early access to Workfreeli. We will continuously be rolling out new features and will keep you posted.</p>
            </div>
            
            <nav class="container-cust">
                <img className='logo' src="https://site.workfreeli.com/wp-content/uploads/2022/01/WFLogo2022_Wordmark-No-Background.png?1646270373" alt="" />
		
			<ul>
				
				<li><a className='nav-text' href="google.com" target="_blank">Our Product</a></li>
				<li><a className='nav-text' href="fb.com" target="_blank">Pricing</a></li>
				<li><a className='nav-text' href="fb.com" target="_blank">Support</a></li>
				<li><a className='nav-text' href="www.fb.com" target="_blank">Sign Up</a></li>
				<li><a className='nav-text' href="fb.com" target="_blank">Login</a></li>
			</ul>
		</nav>
            {/* <div className='nav-con '>
                <div className='container con'>
                    <img className='nav-icon' src="https://site.workfreeli.com/wp-content/uploads/2022/01/WFLogo2022_Wordmark-No-Background.png?1646270373" alt="" />
                    <div>
                        <ul>
                            <li>Our Product</li>
                            <li>Pricing</li>
                            <li>Support</li>
                            <li>Sign Up</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>

            </div> */}


        </div>
    );
};

export default NavBar;