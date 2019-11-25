import React, {useState, useRef} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

/*
 * This is the working code:
 * 1. Use direct state variable one map function to display list.
 * 
 * 2. Use 'useRef' function to get the text value after form submit.
 *  + useRef stores a reference to a component, ex. and input field or div.
 *  + pass 'input' to whatever component you want to get the reference of.
 * 
 * 3. Use spread operator (...) for merge new array to old.
 * 3a. Some use cases for when to use the spread operator:
 *  + add the elements of an existing array into a new arry
 *  + pass elements of an array as arguments to a function
 *  + copy arrays
 *  + concatenate arrays
 *  + REST: condense multiple elements into an array
 */

function App() {
  const [newListItem,setNewListItem] = useState([]);
  const [show, setShow] = useState(false);
  const input = useRef();
  const changeOpen = () => setShow(true);
  const changeClose = () => setShow(false);

  var addToList = e => {
    e.preventDefault();
    // input.current.value is being concatenated (added to) the end of newListItem
    // newListItem array is being 'spread out' by using the spread operator, instead of listing each element in the array.
    setNewListItem([...newListItem, input.current.value]);
  };

  return (
    <div className="App">
      <h2>Simple List</h2>

      <Button onClick={changeOpen}>Add to the List</Button>

      <Modal show={show} onHide={changeClose}>
        <Modal.Header closeButton>
          <Modal.Title>This is the Title</Modal.Title>
        </Modal.Header>
        <form onSubmit={addToList}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Item</Form.Label>
              <br />
              <Form.Control type="text" ref={input} placeholder="Normal text" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="sumbit">Add to List</Button>
          </Modal.Footer>
        </form>
      </Modal>

      <ul>
        {newListItem.map((item, b) => (
          <li key={b}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


