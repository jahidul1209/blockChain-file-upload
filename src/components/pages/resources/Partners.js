import React from 'react'
import { Link } from "react-router-dom";

function Partners() {
    return (
        <div className = 'container'>
            <div className = 'partners pt-5 pb-5'>
                    <div className = 'partner-head'> 
                      <h2>Partners</h2>
                      <p>Learn how you can partner with us to showcase your NFT drops </p>
                    </div>
                    <div className = 'partner-body'>
                        <ul className="article-list">
                        <Link to =  '#'><li className = 'article-list-item'>What's a referral?</li></Link>
                        <Link to =  '#'><li className = 'article-list-item'>Can Eternity verify me? </li></Link>
                        <Link to =  '#'><li className = 'article-list-item'>What are Eternity's fees?</li></Link>
                        <Link to =  '#'><li className = 'article-list-item'>Can you help me with promotions?</li></Link>
                        <Link to =  '#'><li className = 'article-list-item'>What makes a great NFT offering?</li></Link>
                        <Link to =  '#'><li className = 'article-list-item'>How can I partner with Eternity?</li></Link>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Partners
