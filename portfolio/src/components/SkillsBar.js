import React, { Component } from 'react'
import { SkillBar } from 'react-skills';


 
class SkillsBar extends Component{

    render(){
        return (
            <>

                <SkillBar name="React" level={68} color="#04c2c9"/>
                <br></br>
                <SkillBar name="HTML" level={80} color="#04c2c9" />
                <br></br>
                <SkillBar name="CSS" level={80} color="#04c2c9" />
                <br></br>
                <SkillBar name="Java" level={65} color="#04c2c9" />
                <br></br>
                <SkillBar name="Javascript" level={68} color="#04c2c9" />
                <br></br>
                <SkillBar name="SQL" level={60} color="#04c2c9" />
                <br></br>
                <SkillBar name="Selenium" level={45} color="#04c2c9" />
                <br></br>
                <SkillBar name="Node.js" level={38} color="#04c2c9" />
                <br></br>
                <SkillBar name="JSON" level={80} color="#04c2c9" />
                <br></br>
                <SkillBar name="C++" level={30} color="#04c2c9" />
           
             </>
          );
        };
         
    }
 
export default SkillsBar;