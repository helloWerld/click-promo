import { Container, Row, Col } from 'reactstrap';
import InfluencerCard from '../features/influencers/InfluencerCard';


const InfluencerDetailPage = ({ influencer }) => {
    const { name } = influencer;
    return (
        <Container>
            <Row className='my-5 py-5'>
                <Col>
                    Hello World
                <InfluencerCard influencer={influencer} />
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    );
};

export default InfluencerDetailPage;