import React from 'react'

const UserDetails = (props) => {
  return (
    <div className="section">
          <span className="btn-floating btn-large waves-effect waves-light black-text teal lighten-2"> {props.profile.initials}</span>
      		<h4>Welcome... {props.profile.firstName} {props.profile.lastName}</h4>
      		<p>Where are we meeting next? See you soon!</p>
    </div>
  )
}

export default UserDetails