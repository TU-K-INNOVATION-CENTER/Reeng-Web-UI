import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {
     Modal,
     TextField,
     Fab,
     Backdrop,
     Fade,
     Button,
     IconButton
    } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(30, 30, 50),
    },
    container: {
        marginTop: '40%',
        width: '50%'
        
    },
    textField: {
        width: "150%"
    },
    setBell: {
        marginTop: '10%',
        
    },
    fabAdd: {
        marginTop: '10px'
    }
    

  });


// const image = require("../images/bg-img.jpg")
// const classes = useStyles();
// const [open, setOpen] = React.useState(false);



class CreateBell extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: false,
            setOpen: false,
            inputs: ['input-0']
         }
    }


    
    handleOpen = event => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    // adds the input for time
    addTimeInput = () => {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    }



    render() { 
        const { classes } = this.props;
        return ( 
            <div>
                <div class="container">
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
                    
                        <Button
                            halfWidth
                            variant="contained"
                            color="primary"
                            className='btn-impromptu-bell'
                            onClick={this.handleOpen}
                        >
                            Create Impromptu Bell
                        </Button>
                        <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className='modal'
                                open={this.state.open}
                                onClose={this.handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                            <Fade in={this.state.open}>
                                <div className={classes.paper}>
                                    <h2 id="transition-modal-title">Set Impromptu Bell</h2>

                                    {this.state.inputs.map(input => 
                                    <div key={input}>
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            id="time"
                                            label="Select time"
                                            type="time"
                                            defaultValue="07:30"
                                            className={classes.textField}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                            inputProps={{
                                            step: 300, // 5 min
                                            }}
                                        />
                                    </form>
                                    <IconButton aria-label="delete" className={classes.margin}>
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                    
                                    </div>
                                    )}
                                    
                                        <div className={classes.fabAdd}>
                                            <Fab color="primary" aria-label="add" size='small' onClick={this.addTimeInput}>
                                                    <AddIcon />
                                            </Fab>
                                        </div>
                                        

                                    <Button
                                        halfWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.setBell}
                                        onClick={this.handleClose}
                                    >
                                        Done
                                    </Button>
                                </div>
                            </Fade>
                        </Modal>
                        <br />

                        {/* <hr /> */}
                        
                        <Link to="/set-regular-bell">
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
                        
                        <Link to="/all-existing-bells">
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

CreateBell.propTypes = {
    classes: PropTypes.object.isRequired
};
 
export default withStyles(styles)(CreateBell);