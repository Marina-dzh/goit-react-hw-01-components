import PropTypes from 'prop-types'; 
import { Table, Th, Td, Tr} from './Transaction.styled';
export const TransactionHistory = ({ transactions }) => {
    return (
        <Table>
  <thead>
    <tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </tr>
  </thead>

  <tbody>
                {transactions.map(transaction => (
                    <TransactionHistoryItem key={transaction.id} transaction={ transaction} />
    ))}
    
  </tbody>
</Table>
    )
}

const TransactionHistoryItem = ({transaction :{type, amount, currency}}) => {
    return (
       <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr> 
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired})
    )
}
   TransactionHistoryItem.propTypes = {
transaction: PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['withdrawal', 'invoice', 'payment', 'deposit']).isRequired,
    amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
}