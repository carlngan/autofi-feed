import React from "react"

import styles from "./ProfilePicture.module.scss"

// Used to display a profile picture -- in our case a circle around 2 letters, which are initials in a name
const ProfilePicture = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <img src={`https://ui-avatars.com/api/?name=${name}`}></img>
      </div>
    </div>
  )
}

export { ProfilePicture }
