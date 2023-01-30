import { React } from 'react';
import CategoryCard from './CategoryCard';
import { Container, Row, Col } from 'reactstrap';
import { CATEGORIES } from '../../app/shared/CATEGORIES';
import styles from './CategoryCard.module.css';

const CategoryCardList = () => {

    return (
        <Container fluid className='mb-4'>
            <Row className={styles.catCardRow}>
                {CATEGORIES.map((category) => {
                    return (
                        <Col md='1' className='mt-3'>
                            <CategoryCard category={category} key={category.id} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    )

};

export default CategoryCardList;