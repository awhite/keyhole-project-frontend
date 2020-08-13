import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  /* border: 1px solid #1DA1F2;
  border-radius: 4px; */
  margin-bottom: 24px;
  padding: 16px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
`;

const InfoLine = styled(({
  className,
  displayName,
  username,
  profileLink,
  time,
}) => (
    <div className={className}>
      <a href={profileLink}><strong>{displayName}</strong> <span className="light">(@{username}) • {time}</span></a>
    </div>
  ))`
  margin-bottom: 12px;

  a {
    text-decoration: none;
  }

  .light {
    font-weight: 300;
  }
`;

const MetricsLine = styled(({
  className,
  rtNum,
  likeNum,
}) => (
    <div className={className}>
      <strong>Retweets</strong>: {rtNum} • <strong>Likes</strong>: {likeNum}
    </div>
  ))`
  margin-top: 12px;
`;

const ProfileImage = styled(({ className, src, profileLink }) => (
  <a className={className} href={profileLink}>
    <img alt="Profile picture" src={src} />
  </a>
))`
  img {
    width: 48px;
    height: 48px;
  }
`

const Body = styled(({ className, tweetLink, text }) => (
  <a className={className} href={tweetLink}>{text}</a>
))`
  text-decoration: none;
`;

const Tweet = ({
  id,
  imgUrl,
  displayName,
  username,
  text,
  tweetLink,
  profileLink,
  rtNum,
  likeNum,
  time,
}) => {
  return (
    <Container>
      <ProfileImage src={imgUrl} profileLink={profileLink} />
      <ContentContainer>
        <InfoLine profileLink={profileLink} displayName={displayName} username={username} time={time} />
        <Body tweetLink={tweetLink} text={text} />
        <MetricsLine rtNum={rtNum} likeNum={likeNum} />
      </ContentContainer>
    </Container>
  )
};

export default Tweet;
