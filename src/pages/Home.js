import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Carousel from '../components/Carousel/Carousel'
import Container from '@mui/material/Container';


const HomePage = () => {
    return (
        <>
        <Container maxWidth="md" sx={{  marginTop: 2 }}>
            <Carousel/>
        </Container>
        <ItemListContainer />
        </>
    )
}

export default HomePage;