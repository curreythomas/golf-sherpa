import React from 'react'
import { Link } from 'react-router-dom'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import Button from 'material-ui/Button'
import Background from '../../images/golf3.jpg'

const styles = {
  height: '100vh',
  backgroundSize: 'contain',
  background: 'no-repeat center center fixed',
  backgroundImage: `url(${Background})`
}

class Faq extends React.Component {
  render() {
    return (
      <div style={styles}>
        <MenuAppBar title="FAQ" />
        <h1>{"FAQ's"}</h1>
        <SimpleBottomNavigation />
      </div>
    )
  }
}
export default Faq
