import React from "react";
import "./style.css";
function Component ({ele:{status,cost,usercount,storage,
  project,access,classname1,classname2,classname3,classname4,
  phonesuport,private1,domin,statusreport,col
}}){
  
    return(
        <>
 

<section className="pricing py-5">
  <div className="container">
    <div className="row">
      <div className ="col">
     
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{status}</h5>
            <h6 className="card-price text-center"><strong>{cost}</strong>  <span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{usercount}</strong></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{project}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{access} </li>
              <li className={classname1}><span className="fa-li"><i className="fas fa-times"></i></span>{private1}</li>
              <li className={classname2}><span className="fa-li"><i className="fas fa-times"></i></span>{phonesuport} </li>
              <li className={classname3} ><span className="fa-li"><i className="fas fa-times"></i></span>{domin}
              </li>
              <li className={classname4}><span className="fa-li"><i className="fas fa-times"></i></span>{statusreport} </li>
            </ul>
            <div className="d-grid">
              <button  className="btn btn-primary text-uppercase">Button</button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    </div>
  </div>
</section>
        </>
    )

}
export default Component;