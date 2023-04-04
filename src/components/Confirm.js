import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    }

    back = e => {
      e.preventDefault();
      this.props.prevStep();
  }

  render() {
    const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
    return (
      <ThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem 
              primaryText="First Name"
              secondaryText={ firstName }
            />
            <ListItem 
              primaryText="Last Name"
              secondaryText={ lastName }
            />
            <ListItem 
              primaryText="Email"
              secondaryText={ email }
            />
            <ListItem 
              primaryText="Occupation"
              secondaryText={ occupation }
            />
            <ListItem 
              primaryText="City"
              secondaryText={ city }
            />
            <ListItem 
              primaryText="Bio"
              secondaryText={ bio }
            />
          </List>
          <br />
          <Button 
            label="Confirm & Continue"
            primary={true}
            styles={styles.button}
            onClick={this.continue}
          />
          <Button 
            label="Back"
            primary={false}
            styles={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default Confirm;