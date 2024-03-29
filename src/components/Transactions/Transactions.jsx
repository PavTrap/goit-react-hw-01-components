import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const Transactions = ({ items }) => {
	return (
		<table className={css.transaction_history}>
			
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map(({ id, type, amount, currency }) => (
					<tr key={id}>
						<td>{type}</td>
						<td>{amount}</td>
						<td>{currency}</td>
				</tr>
				))}
			</tbody>
		
		</table>
	)
}

Transactions.propTypes = {
	items: PropTypes.arrayOf(PropTypes.exact({
			  id: PropTypes.string.isRequired,
			  type: PropTypes.string.isRequired, 
			  amount: PropTypes.string.isRequired,
			  currency:PropTypes.string.isRequired
}))    
}