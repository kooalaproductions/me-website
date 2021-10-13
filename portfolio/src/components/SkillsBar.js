import React, { Component } from 'react'
import { SkillBar } from 'react-skills';








 
class SkillsBar extends Component{

    render(){
        return (
            <>

                <SkillBar name="ReactJS" level={75} color="blue" />
                
                <SkillBar name="HTML" level={80} color="green" />
           
             </>
          );
        };
         
    }
 
export default SkillsBar;