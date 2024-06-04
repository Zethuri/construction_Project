import './LastSection.css'

const LastSection =()=>{
    return(
        <div className='lastSection'>

            <h>Subscribe to our Newsletter</h>

            <div className='formHolder'>
                <form action="">
                    <input type="text" className='fill' placeholder='Enter your email'/>
                    <button>Subscribe</button>
                </form>
            </div>

        </div>
    )
}

export default LastSection