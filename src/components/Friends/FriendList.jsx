import PropTypes from 'prop-types';
import { Friend } from './Friend';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
	return (
		<div className={css.container}>
			<ul  className={css.friendList}>
				{friends.map(friend => (
					<li className={css.item} key={friend.id}>
						<Friend isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name}/>
					</li>
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