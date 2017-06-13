import React, { PropTypes } from 'react';

const AboutUI = ({bios}) => (
  <div>

    {bios.map((bio) => <p><img src={bio.avatar} height="200px" width="200px"/>{bio.bio}</p>)}
  </div>
);

AboutUI.propTypes = {
  bios : PropTypes.array.isRequired
};

export default AboutUI;
