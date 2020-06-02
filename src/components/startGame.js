import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./css/start.css";


class Start extends React.Component{
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
        //to open the dialog
        this.setState({setOpen:true})
        this.setState({open:true})
      };
    
    handleClose = () => {
        //to close the dialog
        this.setState({setOpen:false})
        this.setState({open:false})
    }

    render(){
        
    
    return(
        <div className="start">
            <h1 className="h1">Click To Play </h1>
            <div>
                
            <button variant="outlined" color="primary" onClick={this.handleClickOpen} className="btn btn-success">
                Start
            </button>
            <Dialog
                fullScreen={this.fullScreen}
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Ready to Play "}</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Click Continue to proceed to the game
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Cancel
                </Button>
                <Link style={{textDecoration:'none'}} to='./game'><Button  color="primary" >
                    Continue To Game 
                </Button></Link>
                </DialogActions>
            </Dialog>
            
                    </div>

        </div>
    )
    }

}
export default Start;