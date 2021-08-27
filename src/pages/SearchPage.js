import { Container, Button, InputGroup, FormControl, Row, Card, Col} from 'react-bootstrap'
import { actionSaveMovie } from '../redux/actions/favorites'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { actionSetSearch } from '../redux/actions/search'
import { actionSetResults } from '../redux/actions/results'








function SearchPage(props) {

    const movies = useSelector( state => state.results)
    const search = useSelector( state => state.search)
    const favorites = useSelector(state => state.movies)

    function handleSubmit(event) {
        event.preventDefault()
        
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${search}`)
            .then((res) => res.json())
            .then((results) => {
                // Store results in piece of state
                dispatch(actionSetResults(results.Search))
                // Use state to display results on the page
            });
    }

    const dispatch = useDispatch()

    function handleSave(movie) {
        dispatch(actionSaveMovie(movie))
        
        
    }


    return (


        <div>
            <h2 className="header sceneit">Scene It React/Redux</h2>
            <Container>
                <form onSubmit={handleSubmit}>
                    <InputGroup className="mb-3" >
                        <FormControl
                            placeholder="Enter a movie name..."
                            aria-label="Search criteria"
                            aria-describedby="basic-addon2"
                            value={search} 
                            onChange={(e) => dispatch(actionSetSearch(e.target.value))} 
                        />
                        <Button variant="outline-danger" id="button-addon2" type="submit">
                            SEARCH
                        </Button>
                        <Link to="/favorites"><Button variant="outline-danger" id="button-addon2">FAVORITES</Button></Link>
                        
                    </InputGroup>
                </form>
            </Container>
            <Container className="mb-3">
                <Row>
                    {movies.map((movie, imdbID) => {
                        return (
                            <Col xs={12} sm={6} lg={4} xl={3}>
                                <Card
                                    border="danger"
                                    key={imdbID}
                                    className="d-flex align-items-center justify-content-between"
                                    

                                >
                                    <Card.Img variant="top" src={movie.Poster} className="img-fluid" alt="movie-poster" style={{ height: '25rem' }} />
                                    <Card.Body style={{ height: '10rem' }}>
                                        <Card.Title style={{ fontSize: '1.5vw'}}>Title: {movie.Title}</Card.Title>
                                        <Card.Text style={{ fontSize: '1.5vw' }}>Release Year: {movie.Year}</Card.Text>
                                        {!favorites.some((favorite)=> favorite.imdbID === movie.imdbID) ?(
                                            <Button  variant="outline-danger" onClick={() => {handleSave(movie)}} 
                                            id="button-addon2" type="submit" >
                                            SAVE
                                        </Button>
                                        ):(
                                            <Button  variant="outline-danger" disabled 
                                            id="button-addon2" type="submit" >
                                            SAVE
                                        </Button>
                                        )}
                                        
                                    </Card.Body>
                                </Card>
                                <br/>
                            </Col>
                        
                        )
                    })}
                </Row>
            </Container>





        </div>
    )
}

export default SearchPage


