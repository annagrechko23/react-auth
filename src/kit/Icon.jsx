import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Icon extends Component{
  constructor(props){
    super(props);
    this.state={
      color: this.props.color? this.props.color:'black',
    }
  }
  render(){
    const styles={
      menuItem:{
        fontSize: '24px',
        padding: '15px',
        cursor: 'pointer',
        color: this.state.color,
      },
    }
    return (
      <span className="icon-wrap">
      <FontAwesomeIcon icon={this.props.icon} style={styles.menuItem}  />
    </span>
  
    );
  }
  
 
};

export default Icon;



 