import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import BottomNavigation, {
  BottomNavigationButton
} from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'
import GolfIcon from 'material-ui-icons/GolfCourse'
import LocalLibraryIcon from 'material-ui-icons/LocalLibrary'

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0'
  }
}

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationButton label="Home" icon={<HomeIcon />} />
        <BottomNavigationButton label="Courses" icon={<GolfIcon />} />
        <BottomNavigationButton label="About" icon={<LocalLibraryIcon />} />
      </BottomNavigation>
    )
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleBottomNavigation)
