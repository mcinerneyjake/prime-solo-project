import './AuditionItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DateTime } from 'luxon';
import { BsFillTrashFill } from 'react-icons/bs';
import { CgDetailsMore } from 'react-icons/cg';

function AuditionItem({ audition }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const getSingleAudition = () => {
    getAuditionById();
    goToAuditionDetails();
  };

  const getAuditionById = () => {
    dispatch({
      type: 'FETCH_AUDITION_DETAILS',
      payload: audition.id,
    });
  };

  const deleteAudition = () => {
    dispatch({
      type: 'DELETE_AUDITION',
      payload: audition.id,
    });
  };

  const goToAuditionDetails = () => {
    history.push('/details');
  };

  return (
    <div className='card-container'>
      <Card style={{ width: '18rem' }} className='p-3 mb-2 audition-item-card'>
        <Card.Body>
          <Card.Title>{audition.show}</Card.Title>
          <Card.Subtitle>{audition.theatre}</Card.Subtitle>
          <Card.Text>{audition.location}</Card.Text>
          <Card.Text>{DateTime.fromISO(audition.date).toLocaleString(DateTime.DATETIME_MED)}</Card.Text>
        </Card.Body>
        <Button className='card-button' onClick={getSingleAudition}>
          See Details <CgDetailsMore />
        </Button>
        {history.location.pathname === '/user' || history.location.pathname === '/past-auditions' ? null : (
          <Button className='mt-3 card-button' onClick={deleteAudition}>
            Delete <BsFillTrashFill />
          </Button>
        )}
      </Card>
    </div>
  );
}

export default AuditionItem;
