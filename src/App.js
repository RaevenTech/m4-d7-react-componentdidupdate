import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WarningSign from './components/WarningSign'
// import MyBadge from './components/MyBadge'
// import SingleBook from './components/SingleBook'
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import CommentArea from "./components/CommentArea";
import { Row, Col } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <WarningSign text="Watch out again!" /> */}
                {/* <MyBadge text="NEW!!" color="info" /> */}
                {/* <SingleBook book={fantasyBooks[0]} /> */}
                <Row>
                    <Col sm={7}>
                        {" "}
                        <BookList books={fantasyBooks} />
                    </Col>
                    <Col sm={5}>
                        {"Reveiws"}
                        <Col>
                            <CommentArea />
                        </Col>
                    </Col>
                </Row>
            </header>
        </div>
    );
}

export default App;
