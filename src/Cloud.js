import React from 'react'

const Cloud = ({ range }) => {

    return (
        <>
            <div class="cloud" id="cloud-main"></div>
            <div class="cloud" id="cloud-before"></div>
            <div class="cloud" id="cloud-center"></div>
            <div class="cloud" id="cloud-after"></div>
            <svg width="0" height="0"> 
            {/* Top Layer */}
                <filter id="filter-main">
                <feTurbulence type="fractalNoise" baseFrequency='0.011' numOctaves="5" 
            seed={100 + range * 6} />     
                <feDisplacementMap  in="SourceGraphic" scale={80 + range * 3} />
                </filter>
                <filter id="filter-before">
                <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" 
            seed={100 + range * 6} />     
                <feDisplacementMap  in="SourceGraphic" scale={80 + range * 3} />
                </filter>
                <filter id="filter-center">
                        <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3"
                seed={100 + range * 6}/>
                    <feDisplacementMap  in="SourceGraphic" scale={80 + range * 3} />
                    </filter>
                <filter id="filter-after">
                    <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="4" seed={100 + range * 6}/>
                <feDisplacementMap  in="SourceGraphic" scale={20 + range * 3} />
                </filter>
            </svg>
        </>
    )
}

export default Cloud
