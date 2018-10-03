import React, { Component } from 'react';
class Video extends Component {
  render() {
    return (
      <div>
        <video src="ryan.mp4" width="800" controls>
          <track
            kind="captions"
            label="English"
            srcLang="en"
            src="cap.vtt"
            mode="showing"
            default
          />
        </video>
      </div>
    );
  }
}
export default Video;
