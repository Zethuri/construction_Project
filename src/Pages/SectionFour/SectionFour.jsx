import "./SectionFour.css"

const SectionFour =()=>{
    return(
        <div className="section-holder">
            <h2>
                Our Project
            </h2>

            <div className="img-holder">

                <div className="image-section">
                    <img className="imgOne"/>
                    <h2>Commercial Construction</h2>
                </div>

                <div className="image-section">
                    <img className="imgTwo"/>
                    <h2>Property Development</h2>
                </div>

                <div className="image-section"> 
                    <img className="imgThree"/>
                    <h2>House Renovation</h2>
                </div>
            </div>
        </div>
    )
}

export default SectionFour;