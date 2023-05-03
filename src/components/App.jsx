import { Profile } from './Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statictics';
import data from '../data.json';
import { FriendList } from './Friends/FriendList';
import friends from '../friends.json';
// import { MarkUp } from './MarkUp/MarkUp'
import { Transactions } from './Transactions/Transactions';
import transactions from '../transactions.json'


export const App = () => {
  return (
    <>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions}/>
    </>
  );
};
