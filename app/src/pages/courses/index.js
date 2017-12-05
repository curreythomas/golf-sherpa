import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'

class Courses extends React.Component {
  render() {
    return (
      <div>
        <MenuAppBar title="Courses" />
        <h1>Courses</h1>
        <SimpleBottomNavigation />
      </div>
    )
  }
}
export default Courses
