import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'

class ViewCourse extends React.Component {
  render() {
    return (
      <div>
        <MenuAppBar title="Book A Tee Time" />
        <h1>View Course</h1>
        <SimpleBottomNavigation />
      </div>
    )
  }
}
export default ViewCourse
