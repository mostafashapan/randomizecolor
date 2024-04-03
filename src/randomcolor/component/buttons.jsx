import React, {useState} from 'react'

export default function Buttons() {
    const [clr, setClr]= useState("jj")
    function  randomcolor(){

         var clor="012345678ABCDEF";

        var code="#";
        for (let i = 0; i < 6 ; i++) {
            code +=clor[Math.floor(Math.random()*16)]

        }
        return code;
    }

    console.log(randomcolor())


    function chandebcolor(){
        document.body.style.color=randomcolor()
        document.body.style.background=randomcolor()



    }


    const mystyle = {
      color: randomcolor(),
   backgroundColor:randomcolor(),

    };

    return (
        <div className="row">

            <input  type="button" className= "col m-3 bg-danger "  value="myname" style={mystyle} onClick={chandebcolor}/>
              <input type="button" className="col m-3 bg-info" value="myname" style={mystyle} onClick={chandebcolor}/>
             <input type="button" className= "col m-3 bg-warning" value="myname" style={mystyle} onClick={chandebcolor}/>
              <input type="button" className= "col m-3 bg-dark text-bg-danger" value="myname" style={mystyle} onClick={chandebcolor}/>

        </div>)}
