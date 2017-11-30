# golf-sherpa

## Chrome

0. AppBar
    - https://material-ui-next.com/demos/app-bar/
0. AppBar Popup Menu
    - https://material-ui-next.com/demos/menus/
0. Bottom Navigation
    - https://material-ui-next.com/demos/bottom-navigation/
0. Overlay for Background Images - Custom CSS with similar features to this react-native example:
```
import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Image source={{uri: 'http://www.thegolfclubgame.com/picture_library/The_Golf_Club_Wallpaper_02_1920x1080.jpg'}} style={s.backgroundImage}>
        <View style={s.overlay}/>
      </Image>
    );
  }
}

const s = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      width: null,
      height: null,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.4
  }
});
```

## In Scope

- Home: Display homepage
    - UI Route: /
    - with **AppBar/BottomNav** 

- About: Display About page 
    - UI Route: /about
    - Hardcode Text

- FAQ: Display FAQs 
    - UI Route: /faq
    - Use API to GET to /faq and return an array of objects 
    ```
    const faqs = [
    {question: This is the question?, answer: This is the answer.},
    {question: This is the question?, answer: This is the answer.},
    {question: This is the question?, answer: This is the answer.}
    ]
    ```

- Contact: Add Contact
    - UI Route: /contact/add
    - Material-UI **Text Fields** Components
        - https://material-ui-next.com/demos/text-fields/
    - Figure out how to send form data to email address  

- List Courses
    - UI Route: /courses
    - API Route: GET /courses
    - 2 Material-UI **Cards** wide by unlimited height on the page, scroll down to see more
        - https://material-ui-next.com/demos/cards/
    - Separate Material-UI **Selects** to filter on city, number of golfers, time.  
        - https://material-ui-next.com/demos/selects/
    
- View Single Course
    - UI Route: /courses/:id
    - API Route: GET /courses/:id
    - Implement a secondary menu option to give the ability to go back to list of courses.
        ```
        <IconButton
            className={classes.firstButton}
            color="contrast"
            aria-label="Menu"
            onClick={
              props.goBack
                ? typeof props.goBack === 'string'
                  ? props.lastPage(props.history, props.goBack)
                  : props.lastPage(props.history)
                : props.toggleDrawer
            }
          >
            {props.goBack ? (
              <GoBackIcon style={{ fontSize: 32, marginTop: 0 }} />
            ) : (
              <MenuIcon />
            )}
          </IconButton>
        ```
    
- Book Tee Time  

## Out of Scope

0. Edit Contact
0. Delete Contact
0. Add/Edit/Delete Course 

## User Stories

### Book Tee Time
As a golfer I would like to book a tee time by viewing a golf course and selecting my tee time from a list of tee times (API) so that I can enjoy an exilerating round of golf.

#### Workflow
User views list of courses (UI: /courses)
User selects a course from the list of courses which navigates them to the view page for the selected course (UI: /courses/id)
User elects to add a tee time for that course by selecting the FAB button. User is directed to the add tee time page (UI: courses/id/teetimes/add)



## Database

- FAQ 
```
    [
        {question: This is the question?, answer: This is the answer.},
        {question: This is the question?, answer: This is the answer.},
        {question: This is the question?, answer: This is the answer.}
    ]
```
- Courses
```
[
    {
       name: "Course Name",
       address: "Course Address",
       city: "Course City",
       state: "Course State",
       zip: "Course Zip",
       phone number: "Course Phone Number",
       website: "Course Website",
       date: "Round Date",
       time: "tee time",
       golfers: "number of golfers",
       rate: "price per person",
       picURL: "image url"
    }
]
```
  

