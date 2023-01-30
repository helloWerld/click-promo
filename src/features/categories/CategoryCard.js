import { React } from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import styles from './CategoryCard.module.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faDog, faPaintBrush, faPallet, faShieldDog } from '@fortawesome/free-solid-svg-icons';

const CategoryCard = ({ category }) => {


    return (
        <Card id={styles.catCard}>
                <FontAwesomeIcon icon={category.icon} color='white' className='fs-6' />
                <CardTitle className='fs-6 mt-1'>
                    {category.name}
                </CardTitle>
        </Card>
    )
};

export default CategoryCard;