import { React } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, Row, Col } from 'reactstrap';
import styles from './InfluencerCard.module.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import star from '../../app/assets/img/star-solid.svg';

const InfluencerCard = ({influencer}) => {
    const { id, name, image, youtubeSubCount, youtubeUrl, twitterSubCount, twitterUrl, tags } = influencer;

    return (
        <Link to={`${name}`}>
            <Card className={styles.infCard}>
                <CardImg className={styles.infImg} src={image}/>
                <CardBody className={styles.infCardBody}>
                    <CardTitle className='my-3 fs-2' tag="h3">
                        <Row className='align-items-center'>
                            <Col xs='8' className='text-start'>
                                {name}
                            </Col>
                            <Col xs='4' className='fs-4 text-end'>
                                <img src={star} height='20px'/> 4.85
                            </Col>
                        </Row>
                    </CardTitle>
                    <CardSubtitle
                        className='mt-2 fs-5'
                        id={styles.infCardSubtitle}
                        tag="h6"
                    >
                        <Row>
                            <Col className='text-start'>
                                <a href={youtubeUrl} target='_blank' className={styles.socialLink} ><FontAwesomeIcon icon={faYoutube} color='red' /> &nbsp; {youtubeSubCount.toLocaleString()}</a><br />
                                <a href={twitterUrl} target='_blank' className={styles.socialLink} ><FontAwesomeIcon icon={faTwitter} color='cyan' /> &nbsp; {twitterSubCount.toLocaleString()}</a>
                            </Col>
                            <Col className='text-end'>
                                <a href={youtubeUrl} target='_blank' className={styles.socialLink} ><FontAwesomeIcon icon={faTiktok} color='black' /> &nbsp; {youtubeSubCount.toLocaleString()}</a><br />
                                <a href={twitterUrl} target='_blank' className={styles.socialLink} ><FontAwesomeIcon icon={faInstagram} color='orange' /> &nbsp; {twitterSubCount.toLocaleString()}</a>
                            </Col>
                        </Row>
                    </CardSubtitle>
                </CardBody>
            </Card>
        </Link>
    );
};

export default InfluencerCard;