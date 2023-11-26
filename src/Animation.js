import React from 'react'
const Animation = () => {
    return ( 
        <div>
            <section className='animation-wrapper'>
                <section className='animation'>
                    <section className='hero'>
                        <img src={require('./math.jpg')} alt='image' />
                    </section>
                </section>
                <div className='slider'></div>
            </section>
        </div>
     );
}
 
export default Animation;