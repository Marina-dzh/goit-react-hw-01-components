import { Profile } from "../Profile/Profile";
import { Statistics } from "../Statistics/Statistics";
import { FriendList } from "../FriendsList/FriendList";
import { TransactionHistory } from "../Transactions/TransactionHistory";

import user from '../../back/user.json';
import data from '../../back/data.json';
import friends from '../../back/friends.json';
import transactions from '../../back/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {<Profile userData={user} />}
      {<Statistics stats={data} title="Upload stats" />}
      {<FriendList friends={friends} />}
      {<TransactionHistory transactions = {transactions} />}
    </div>
  );
};
