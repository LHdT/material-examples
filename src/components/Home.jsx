import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

	


class Home extends React.Component{



	 render() {
	  const { classes } = this.props;
	  
	  return (
	    <div >
	      <Paper></Paper>
	    </div>
	  );
	}

}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(CustomAppbar);
export default Home;
