import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const Friend = ({ id, avatar, name, isOnline }) => {
	return (
	<>
	<li className={css.item}>
		<span className={`${css.status} ${isOnline ? css.online : css.ofline}`}></span>
		<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
		<p className={css.name}>{name}</p>
	</li>
	</>
	)
}
Friend.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
	
 }
