
import PropTypes from 'prop-types'; 
import { Container, StatList , Item, Label} from './Statistcs.styled';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const Statistics = ({ stats, title }) => {
    return (
<Container>
            {title && (<h2 className="title">{title}</h2>
            )}
<StatList>
                {stats.map(data =>  (
                <StatisticItem key={data.id} data={data} />))}
</StatList></Container>);
};



const StatisticItem = ({ data: { label, percentage } }) => {
    return (
        <Item style={{backgroundColor : getRandomHexColor()}}>
            <Label>{label}</Label>
            <span className="percentage">{percentage }%</span>
        </Item>
    )
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
    
}

StatisticItem.propTypes = {
    data: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd']).isRequired,
        percentage:PropTypes.number.isRequired,
    })
}