import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Button, Row, Card, Col} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { actionRemoveMovie } from '../redux/actions/favorites'
import { Link } from 'react-router-dom'

function FavoritesPage(props) {
    const movies = useSelector (state => state.movies)

    const dispatch = useDispatch()

    function handleRemove(movie) {
        dispatch(actionRemoveMovie(movie))
    }

    return (
        <div>
            <Container >
                <h2 className="header sceneit">Scene-It Favorites</h2>
                <Link to="/">Home </Link>
            </Container>
            <br/>
            <Container className="mb-3">
                <Row>
                    {movies.map((movie, imdbID) => {
                        return (
                            <Col xs={12} sm={6} lg={4} xl={3}>
                                <Card
                                    style={{ borderColor: '#2E0154'}}
                                    
                                    border={null}
                                    key={imdbID}
                                    className="d-flex align-items-center justify-content-between"

                                >
                                    <Card.Img variant="top" src={movie.Poster} className="img-fluid" alt="movie-poster" style={{ height: '25rem' }} />
                                    <Card.Body style={{ height: '10rem' }}>
                                        <Card.Title style={{ fontSize: '1.5vw' }}>Title: {movie.Title}</Card.Title>
                                        <Card.Text style={{ fontSize: '1.5vw' }}>Release Year: {movie.Year}</Card.Text>
                                        <Button variant="outline-danger" onClick={() => {handleRemove(movie)}} id="button-addon2" type="submit">
                                            UNSAVE
                                        </Button>
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

export default FavoritesPage
