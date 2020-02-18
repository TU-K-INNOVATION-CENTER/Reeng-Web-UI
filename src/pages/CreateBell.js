import React, {Component} from 'react';
import '../App.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';



class CreateBell extends Component {
    

    render() { 
        return ( 
            <div className="root">
                <div className="container">
                    {/* The image is selected by the school  */}
                    {/* <img src={image} alt="Snow" className='image-div'/> */}
                    <div className="centered">
                        <p className='intro-text'>Welcome to Reeng 'schoolName'</p>
                        {/* The sub-text is the name of the school  */}
                        {/* <p className='sub-text'>Set a bell</p> */}
                    </div>
                </div>
                {/* The image div */}
                {/* <div className='image-div'>
                    
                        <h2 className='header-text'>Welcome to Reeng</h2>

                    
                    

                </div> */}


                {/* The create-bell buttons div */}
                <div className='button-div'>

                        <Link to='set-impromptu-bell' style={{ textDecoration: 'none'}}>
                            <Button
                                halfWidth
                                variant="contained"
                                color="primary"
                                className='btn-impromptu-bell'
                                
                            >
                                Create Impromptu Bell
                            </Button>
                        </Link>
                        
                        
                        <br />

                        {/* <hr /> */}
                        
                        <Link to="/set-regular-bell" style={{ textDecoration: 'none'}}>
                        <Button
                            halfWidth
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '1em'}}
                        >
                            Create Regular Bell
                        </Button>
                        </Link>
                        <br />

                        {/* <hr /> */}
                        
                        <Link to="/all-existing-bells" style={{ textDecoration: 'none'}}>
                        <Button
                            halfWidth
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '1em'}}
                            
                        >
                            View all Bells
                        </Button>
                        </Link>
                        

                        
                        
                    
                </div>
            </div>
         );
    }

    
}


export default CreateBell;