import React, {PropTypes} from 'react';

const HomeUI = ({members, collaborators}) => (
  <div>
    <h1 className="header-title">
      <span>/</span>CoDevs<span>/</span>
    </h1>
    <div className="members">
      {members.map((member, i) => <MemberItem member={member} key={i}/>)}
    </div>
    <ul className="collaborators">
      {collaborators.map((col, i) => (
        <li key={i}>
          <p>{col}</p>
        </li>
      ))}
    </ul>
  </div>
);

HomeUI.propTypes = {
  members: PropTypes.array.isRequired,
  collaborators: PropTypes.array.isRequired
};

export default HomeUI;

const MemberItem = ({member}) => {
  const imgSrc = `./static/images/${member.pic}.png`;
  return (
    <div className="members-item">
      <img src={imgSrc} alt="Codevs" className="header-icon" height="180px" width="180px"/>
      <p>
        {member.name}
      </p>
      <div className="social">
        {member.social.map((item, i) => <Social key={i} social={item}/>)}
      </div>
    </div>
  );
}

MemberItem.propTypes = {
  member: PropTypes.object.isRequired
}

const Social = ({social}) => {
  const cssClass = `social-icon ${social.name} fa fa-${social.name}`;
  return (<a className={cssClass} href={social.reference}/>)
};
