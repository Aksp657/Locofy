import React from "react";
import google from "../assets/google.svg"
import smso from '../assets/sso.svg'
import git from '../assets/github.svg'
import { useState } from "react";
import './login-options.css'
function Options()
{
  const [box] = useState ([
    {
      image:google,
      company_name:'Google'
    },
    {
      image:git,
      company_name:'Git Hub'
    },
    {
      image:smso,
      company_name:'SAML SSO'
    },
    

  ])
  return(
    <>
    <div className="box">
      {
        box.map((cards,i) => (

          <div key={i} className="cards">

            <img className="img" src={cards.image} alt="" />
            <p>{cards.company_name}</p>
      
          </div>
        )
      )
      }
      
    </div>
    </>
  )
}

export default Options;