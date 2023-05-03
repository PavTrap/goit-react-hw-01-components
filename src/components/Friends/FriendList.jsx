import PropTypes from 'prop-types';
import { Friend } from './Friend';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
	return (
		<div className={css.container}>
			<ul  className={css.friendList}>
				{friends.map(friend => (
						<Friend isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} key={friend.id}/>
				))}
			</ul>
		</div>
	)
}
FriendList.propTypes = {
	friends: PropTypes.arrayOf(
	  PropTypes.shape({
		 id: PropTypes.number.isRequired,
	  })
	),
 };