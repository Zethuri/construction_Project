import "./Footer.css"

const Footer =()=>{
    return(
        <div className="footer">
        
        <div className="footer-1">
            <img className="logo" />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolor ab, nulla odit adipisci iusto magnam, minima aliquam ex cum, illum fugiat dolorem natus. Voluptatem sapiente libero ullam esse modi.
            </p>
        </div>

        <div className="footer-2">
            <h2>Quick Link</h2>
            <nav>
                <a href="">Home</a>
                <a href="">About us</a>
                <a href="">Our Services</a>
                <a href="">Our Projects</a>
                <a href="">Contact Us</a> 
            </nav>

        </div>

        <div className="footer-3">

            <h2>Contact</h2>
            <p>Address - 5 Norman Williams Street Ikoyi Lagos, Nigeria </p>
            <p>Phone - 07065372913 | Telephone - 01-3549397</p>
            <p>Email - info@crispbelle.co.ng</p>

        </div>

        </div>
    )
}

export default Footer