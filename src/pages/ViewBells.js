import React, { Component } from 'react';
import TimeCards from "../components/ViewBellCard";
import {
    Fab,
    } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from "react-router-dom";


class RegularBell extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{backgroundColor: 'whitesmoke', minHeight: '100vh', paddingTop: '4em'}}>
                
                <div style={{marginLeft: '20%', marginRight: '20%', backgroundColor: 'whitesmoke', paddingBottom: '2em'}}>
                
                <div className='create-bell-header'>
                    
                        <h1>
                            All Existing Bells
                        </h1>
                   
                        
                </div>
                <div>
                <div className='body-section'>
                    <div>
                        <TimeCards />
                        <TimeCards />
                        <TimeCards />
                        <TimeCards />
                        
                        <div className='action-icons'>
                            <Link to='/set-regular-bell'>
                                <Fab size="small" color="secondary" aria-label="edit"
                                style={{marginLeft: '1em'}}>
                                    <EditIcon />
                                </Fab>
                            </Link>
                        </div>
                        
                            
                        
                    </div>
                    
                </div>
                </div>
            </div>    
            </div>
         );
    }
}
 
export default RegularBell;

