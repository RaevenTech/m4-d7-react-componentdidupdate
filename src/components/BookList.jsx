import React from 'react'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { Col, Container, Form, Row } from 'react-bootstrap'

class BookList extends React.Component {

    state = {
        searchQuery: ''
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={8}>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search here"
                                value={this.state.searchQuery}
                                onChange={e => this.setState({ searchQuery: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {
                        this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(b => (
                            <Col xs={3} key={b.asin} >
                                <SingleBook book={b} />
                            </Col>
                        ))
                    }
                </Row>
                </Col>
                <Col sm={4}>
                    {
                    this.state.selected && <CommentArea asin={this.props.book.asin} />
                    }
                </Col>
                </Row>
                   
            </Container>
        )
    }

}

export default BookList