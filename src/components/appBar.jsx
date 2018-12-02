import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class CustomAppbar extends React.Component{

state = {
    	leftBar: false,
};
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
	constructor(props){
		super(props);
	}



	 render() {
	  const { classes } = this.props;
	  const sideList = (
	      <div className={classes.list}>
	        <List>
	          {this.props.menuItems.map((text, index) => (
	            <ListItem button key={text}>
	              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
	              <ListItemText primary={text} />
	            </ListItem>
	          ))}
	        </List>
	        {
	        	//<Divider/> 
	        }
	      </div>
    );


	  return (
	    <div className={classes.root}>
	      <AppBar position="static">
	        <Toolbar>
	          <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
	            <MenuIcon />
	          </IconButton>
	          <Typography variant="h6" color="inherit" className={classes.grow}>
	            {this.props.title}
	          </Typography>
	          <Button color="inherit">Login</Button>
	        </Toolbar>
	      </AppBar>
	      <div>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
	    </div>
	  );
	}

}
CustomAppbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomAppbar);