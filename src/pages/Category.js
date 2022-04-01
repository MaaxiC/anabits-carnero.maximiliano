import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';
import NotFound from '../pages/NotFound';

const categories = ['headphones', 'microphones', 'speakers', 'dj-consoles'];

const CategoryPage = () => {
    const { category } = useParams();

    return (
        categories.includes(category) ? <ItemListContainer /> : <NotFound />
    )
}

export default CategoryPage;