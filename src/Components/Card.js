// import React from "react";

// export default function Card(props) {
//     return (
//         <div className="card">
//             <h1 className="">Our Reviews!</h1>
//             <img src="images/review1.png" alt="another image" className="card--image"/>
//             <div className="card--stats">
//                 <img src="images/star.png" alt="rating star image" className="card--star"/>
//                 <span>5.0</span>
//                 <span className="gray">(6) • </span>
//                 <span className="gray">USA</span>
//             </div>
//             <p>Life Lessons with Katie Zareres</p>
//             <p><span className="bold">From $136</span> / person</p>
//         </div>
//     )
// }

import React from "react"

export default function Card(props) {
    
    return (
        <div className="card">
            { props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`../images/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}