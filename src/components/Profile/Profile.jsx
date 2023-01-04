import PropTypes from 'prop-types'; 
import { CgProfile } from 'react-icons/cg'
import { BsGeoAlt } from 'react-icons/bs'
import { Container, Name, Tag, Location, Stats, StatsItem } from './Profile.styled';
// import css from "./Profile.module.css"
export const Profile = ({ userData: { username, tag, location, avatar, stats } }) => {
    return (
    <Container key={username} >
                <div className="description">
                    <img
                        src={avatar}
                        alt="User avatar"
                        className="avatar"
                    />
                <Name><CgProfile style={{ width: "36", height: "36"}} />{username}</Name>
                    <Tag> @{tag}</Tag>
                    <Location><BsGeoAlt style={{ width: "36", height: "36"}}/>{location}</Location>
                </div>

                <Stats>
                    <StatsItem>
                        <span className="label">Followers</span>
                        <span className="quantity">{stats.followers}</span>
                    </StatsItem>
                    <StatsItem>
                        <span className="label">Views</span>
                        <span className="quantity">{stats.views}</span>
                    </StatsItem>
                    <StatsItem>
                        <span className="label">Likes</span>
                        <span className="quantity">{stats.likes}</span>
                    </StatsItem>
                </Stats>
            </Container>)
};

Profile.propTypes = {
    userData: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }),
    }).isRequired,
};