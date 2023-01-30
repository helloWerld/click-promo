import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import InfluencerCard from './InfluencerCard';
import { selectAllInfluencers } from './influencersSlice';



const InfluencerCardList = () => {

    const influencers = selectAllInfluencers();

    return (
        <Container fluid className='mt-5'>
            <Row className='ms-5'>
                {influencers.map((influencer) => {
                        return (
                            <Col xs='12' md='6' lg='4' xxl='3' className='m-0'>
                                <InfluencerCard influencer={influencer} key={influencer.id} />
                            </Col>
                        );
                })}
            </Row>
        </Container>
    );
};

export default InfluencerCardList;