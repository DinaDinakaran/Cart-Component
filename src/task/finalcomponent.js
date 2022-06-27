import Component from "./Component"
import "./style.css";

function FinalComponent (){

    const values=[
        {status:"free",cost:"$0",
        usercount:"Single User",storage:"5GB Storage",
        project:"Unlimited Public Projects",access:"Community Access",
        classname1:"text-muted",
        classname2:"text-muted",
        classname3:"text-muted",
        classname4:"text-muted",private1:"Unlimited Private Projects",
        phonesuport:"Dedicated Phone Support",
        domin:"Free Subdomain",
        statusreport:"Monthly Status Reports",
        Col:"row"
    }
    ,
    {status:"plus",cost:"$9",
    usercount:"5 User",storage:"50GB Storage",
    project:"Unlimited Public Projects",access:"Community Access",
    classname1:"fa-li",
    classname2:"fa-li",
    classname3:"fa-li",
    classname4:"text-muted",private1:"Unlimited Private Projects",
    phonesuport:"Dedicated Phone Support",
    domin:"Free Subdomain",
    statusreport:"Monthly Status Reports",
    Col:"col"
},
    {status:"pro",cost:"$49",
    usercount:"Unlimited User",storage:"150GB Storage",
    project:"Unlimited Public Projects",access:"Community Access",
    classname1:"fa-li",
    classname2:"fa-li",
    classname3:"fa-li",
    classname4:"fa-li",private1:"Unlimited Private Projects",
    phonesuport:"Dedicated Phone Support",
    domin:"Free Subdomain",
    statusreport:"Monthly Status Reports",
    Col:"card"
}
    ]
    return(
        <>
        {values.map((ele)=>{
            return(
                <Component ele={ele}/>
            )
        })}
        </>
    )
}
export default FinalComponent;