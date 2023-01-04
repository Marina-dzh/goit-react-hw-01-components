import { FaDotCircle } from "react-icons/fa";
import PropTypes from 'prop-types'; 
import { Container, Item } from "./FriendList.styled";
export const FriendList = ({ friends }) => {
    return (
        <Container>
            {friends.map(friend => (
                < FriendItem key={friend.id} friendData={ friend} />
  ))}
</Container>
    )
}

 const FriendItem = ({friendData: {avatar, name, isOnline}}) => {
    return (
        <Item>
            <span className="status" >
                
                {isOnline?(<FaDotCircle style={{ width: "24", height: "24"}} fill="green" />
            ) : (<FaDotCircle style={{ width: "24", height: "24"}} fill="red" />)}
                
                </span>
  <img className="avatar" src={avatar} alt="User avatar" width="68" />
            <p className="name">{ name}</p>
</Item>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired})
    )
}

FriendItem.propTypes = {
    friends: PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
    })

}