import InfluencerCardList from '../features/influencers/InfluencerCardList';
import CategoryCardList from '../features/categories/CategoryCardList';

const HomePage = () => {
    return (
        <>
            <CategoryCardList />
            <InfluencerCardList />
        </>
            
    )
};

export default HomePage;