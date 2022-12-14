import css from "./FriendList.module.css"
import propTypes from 'prop-types'
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = 
(({friends}) => 
{
return (<ul className={css.friendList}>
    
     {friends.map((friend) =>( <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}  />
     
    
    ))}
    
</ul>)

})

FriendList.propTypes = {
    friends: propTypes.arrayOf(propTypes.shape).isRequired}