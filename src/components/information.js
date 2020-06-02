import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class Information extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open:false,
            setOpen:false
        }
        this.handleClickOpen=this.handleClickOpen.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }
    handleClickOpen = () => {
        this.setState({setOpen:true})
        this.setState({open:true})
      };
    
    handleClose = () => {
        this.setState({setOpen:false})
        this.setState({open:false})
    }

    render(){
        
    
    return(
        <div className="Information">
            <div>
                
            <button variant="outlined" color="primary" onClick={this.handleClickOpen} className="btn btn-success">
                Information
            </button>
            <Dialog
                fullScreen={this.fullScreen}
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Rules of the game"}</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    <ul>
                        <li>Cant exit game area with the snake else you lose</li>
                        <li>If you eat yourself you lose</li>
                        <li>You need to be exactly inline with the food to eat</li>
                    </ul>
                    <h3>Controls</h3>
                    <ul>
                        <li>Arrow key Up to move Upwards</li>
                        <li>Arrow key Right to move Right</li>
                        <li>Arrow key Down to move Downwards</li>
                        <li>Arrow key Left to move Left</li>
                        
                    </ul>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Cancel
                </Button>
                </DialogActions>
            </Dialog>
            
                    </div>

        </div>
    )
    }

}
export default Information;