import React, { Component } from 'react';
import TimeCards from "../components/TimeCards";
import {
    Fab,
    Button
    
   } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';


class RegularBell extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='view-bells-container'>
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
                        <div className='btn-save'>
                            <Button
                                halfWidth
                                variant="contained"
                                color="primary"
                                
                            >
                                Save
                            </Button>
                        </div>
                        <div className='action-icons'>
                            <Fab size="small" color="secondary" aria-label="edit"
                            style={{marginLeft: '1em'}}>
                                <EditIcon />
                            </Fab>
                        </div>
                        
                            
                        
                    </div>
                    
                </div>
                </div>
                
            </div>
         );
    }
}
 
export default RegularBell;