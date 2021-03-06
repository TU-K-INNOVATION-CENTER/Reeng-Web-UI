import React, { Component } from 'react';
import {
    Fab,
    Button
    
   } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
import TimeCards from "../components/TimeCards";
import { Link } from "react-router-dom";


class ImpromptuBell extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: false,
            setOpen: false,
            inputs: ['input-0']
           
         }
    }

    // adds the input for time
    addTimeInput = (e) => {
        e.preventDefault();
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }

    handleReset = event => {
        event.preventDefault();
        this.setState({ inputs: ['input-0']})
    }
    


   
    render() { 
        
        return ( 
            <div style={{backgroundColor: 'whitesmoke', minHeight: '100vh', paddingTop: '4em'}}>
                
                <div style={{marginLeft: '20%', marginRight: '20%', backgroundColor: 'whitesmoke', paddingBottom: '3em'}}>
                
                <div className='create-bell-header'>
                
                        <h1>
                            Impromptu Bell
                        </h1>
                   
                        
                </div>
                    
                    
              
                <div className='body-section'>
                    <div>
                        {this.state.inputs.map(input => 
                            <div key={input}>
                                <TimeCards />
                            </div>
                            
                            )}
                        <div className='btn-save'>
                            <Button
                                halfWidth
                                variant="contained"
                                color="primary"
                                
                            >
                                Save
                            </Button>
                            <Button
                                halfWidth
                                variant="contained"
                                color="primary"
                                style={{ marginLeft: '2em'}}
                                onClick={this.handleReset}
                            >
                                Reset
                            </Button>
                        </div>
                        <div className='action-icons'>
                            <Fab size="small" color="primary" aria-label="add" onClick={this.addTimeInput}>
                                <AddIcon />
                            </Fab>
                            {/* <Fab size="small" color="secondary" aria-label="edit"
                            style={{marginLeft: '1em'}}>
                                <EditIcon />
                            </Fab> */}
                        </div>
                        
                            
                        
                    </div>
                    
                </div>


                    <div className='btn-view-bells'>
                        <Link to="/all-existing-bells" style={{ textDecoration: 'none'}}>
                            <Button
                                halfWidth
                                variant="contained"
                                color="primary"
                                
                                
                            >
                                View all Bells
                            </Button>
                        </Link>
                    </div>
                
             </div>   
            </div>
         );
    }
}
 
export default ImpromptuBell;