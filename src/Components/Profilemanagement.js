import React from 'react'
import '../css/Profile.css'
const Profilemanagement = () => {
  return (
    <div>
        <div className="profile-main" >
            <div className="profile-heading" data-aos-duration="2000" data-aos="zoom-out-right">
                <h1>View our plans</h1>
                <h5>Globalize your reach!</h5>
                <p>Portray your brand on social media outlets. Employers are constantly looking for you on social media</p>

            </div>

            <div className="subscribe-main" data-aos-duration="3000"  data-aos="zoom-in">
            <div className="Total">
            <div className="subscribe-box">
                    <h3>$ 6.00 / Month</h3>
                    <ul className='subs-list'>
                        <li>Create Professional CVs<input type="checkbox"/></li>
                        <li>Formatting and Design  <input type="checkbox"/></li>
                        <li>Keyword Optimization   <input type="checkbox"/></li>
                        <li>Revision               <input type="checkbox"/> </li>
                        <li>Delivery               <input type="checkbox"/>   </li>

                    </ul>
                    <button className='pro-btn'>Get it Now</button>
                </div>
                <p>“ Stand out from those who compete with “</p>
            </div>
                
               
                    <div className="Total">
                    <div className="subscribe-box">
                    <h3>$ 6.00 / Month</h3>
                    <ul className='subs-list'>
                        <li>Create Professional CVs <input type='checkbox'/></li>
                        <li>Formatting and Design   <input type='checkbox'/></li>
                        <li>Keyword Optimization    <input type='checkbox'/></li>
                        <li>Revision                <input type='checkbox'/>  </li>
                        <li>Delivery                <input type='checkbox'/></li>

                    </ul>
                    <button className='pro-btn'>Get it Now</button>
                </div>
                <p>“Create communication with like minded people”</p>
                    </div>
                    <div className="Total">
                    <div className="subscribe-box">
                    <h3>$ 6.00 / Month</h3>
                    <ul className='subs-list'>
                        <li>Create Professional CVs <input type='checkbox' /></li>
                        <li>Formatting and Design   <input type='checkbox' /></li>
                        <li>Keyword Optimization    <input type='checkbox' /> </li>
                        <li>Revision                <input type='checkbox' />  </li>
                        <li>Delivery                <input type='checkbox' /> </li>

                    </ul>
                    <button className='pro-btn'>Get it Now</button>
                </div>
                <p>“Project yourself with the way you want your employers to see you”</p>
                    </div>
                

               

                
            </div>
        </div>
        
    </div>
  )
}

export default Profilemanagement