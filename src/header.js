import React, { Component } from 'react';
import './Form1.css'
import "./Panmain.css";
 

class Header extends Component {
  render() {
    return (
        
        <div> 
            <table>
                <tbody>
                    <tr>
                       <td>
                           <div className="tablebox1">

                                <br/> <br/>
                                <div className = "tablebox1Label"> <label className = "tablebox1Label"> Only</label>  </div>  
                                <div className = "tablebox1Label"> <label className = "tablebox1Label"> ‘Individuals’ </label></div>   
                                <div className = "tablebox1Label"> <label className = "tablebox1Label"> to affix recent </label> </div> 
                                <div className = "tablebox1Label"><label className = "tablebox1Label"> photograph</label> </div>
                                <div className = "tablebox1Label"><label className = "tablebox1Label"> (3.5 cm x</label> </div> 
                                <div className = "tablebox1Label"><label className = "tablebox1Label"> 2.5 cm)</label> </div>

                           </div>
                           <div className="tablebox11">
                                
                                <div className = "tablebox11Label"> <label className = "tablebox11Label"> Sign / Left Thumb impression </label> </div>
                                <div className = "tablebox11Label"> <label className = "tablebox11Label"> across this photo</label> </div>
                           </div>
                       </td>
                       <td>
                           <div className="column2">

                                <label className="row1"> Form No. 49A</label><br /> 
                                <label className="row2"> Application for Allotment of Permanent Account Number</label><br />
                                <label className="row3">[In the case of Indian Citizens/lndian Companies/Entities incorporated in India/</label><br />
                                <label className="row4">Unincorporated entities formed in India]</label><br />
                                <label className="row5">See Rule 114</label><br />
                                <label className="row6">To avoid mistake (s), please follow the accompanying instructions and examples before filling up the form</label>
                  
                           </div>
                       </td>
                       <td>
                            <div className="tablebox2">

                                <br/> <br/>
                                <div className = "tablebox1Label"> <label className = "tablebox1Label"> Only</label>  </div>  
                                <div className = "tablebox1Label"> <label className = "tablebox1Label"> ‘Individuals’ </label></div>   
                                <div className = "tablebox1Label"> <label className = "tablebox1Label"> to affix recent </label> </div> 
                                <div className = "tablebox1Label"><label className = "tablebox1Label"> photograph</label> </div>
                                <div className = "tablebox1Label"><label className = "tablebox1Label"> (3.5 cm x</label> </div> 
                                <div className = "tablebox1Label"><label className = "tablebox1Label"> 2.5 cm)</label> </div>
                            </div>

                       </td>
                    </tr>
 
                </tbody>
            </table>

            <label className = "FirstLabel">Sir, </label> <br/>
            <label className = "FirstLabel">I/We hereby request that a permanent account number be alloted to me/us. </label> <br/>
            <label className = "FirstLabel">I/We give below necessary particulars: </label> <br/>
 
        </div>
        
    );
  }
}

export default Header;



