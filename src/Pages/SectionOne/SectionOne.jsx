import "./SectionOne.css"

const SectionOne =()=>{
    return(
        <div className="sectionOne">

            <div className="sectionImg"> 
            <img src="sectionOne.png" alt="" />
            </div>

            <div className="sectionText">

                <h2> About Us </h2>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum delectus quae modi consequuntur fuga, voluptatibus nam, est ut accusamus, tempore explicabo corrupti ipsa libero quam magni veniam fugiat ullam dolore dignissimos quis ad a sit labore doloribus! Eum quasi, maxime modi autem, ex dolor sapiente assumenda eaque hic doloremque ducimus. </p>

                <button className="section-button">
                    Learn More
                </button>

            </div>

        </div>
    )
}

export default SectionOne;