import React from 'react'
import AvatarUploader from 'react-avatar-uploader'

class Avatar extends React.Component {
  render() {
    return(
      <AvatarUploader
      size={150}
      oploadURL={'http://localhost:3000/dashboard#pablo'}
      fileType={'image/png'}
      />
    );

  }
}

export default Avatar;
