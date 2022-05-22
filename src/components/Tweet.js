import ProfileImage from './ProfileImage';
import Message from './Message';
import User from './User';
import Timestamp from './TimeStamp';
import Actions from './Actions';

function Tweet(props) {
  console.log(props);
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message} />
        <Actions className="actions" />
      </div>
    </div>
  );
}

export default Tweet;
