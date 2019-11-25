import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

//>>>>> Got fixes back from stackoverflow. Will make comments where fixes need to be made with: //>>>>>

//>>>>> This is my original code for adding text to a list. The new code, with correct changes from stackoverflow, are in App.js //>>>>>

function App() {

  /*============================================================================================
                              Modal Window state and functions
  =============================================================================================*/
  const [show, setShow] = useState(false);

  const changeOpen = () => setShow(true);
  const changeClose = () => setShow(false);


  /*============================================================================================
                                   List state and functions
  =============================================================================================*/
  const [newListItem, setNewListItem] = useState('');

  /*>>>>>
   * Do not use 'updateList()', just use addToList().
   *
   * the correct addToList function:
   *
   * var addToList = e => {
   *  e.preventDefault();
   *  setNewListitem([...newListItem, input.current.value]);
   * 
   * }
   >>>>>*/

  // Adding to the list
  var addToList = (e) => {
    // Stop the page from reloading when form is submitted
    e.preventDefault();
    // Add newListItem to list array when form is submitted
    listItems.push(newListItem);
    console.log('From addToList: ');
    console.log(newListItem);
    console.log('listItems array: ');
    console.log(listItems);
  }

  // updateList captures text input from 
  var updateList = (e) => {
    //console.log(e.target.value);
    setNewListItem(e.target.value);
    console.log('From updateList: ');
    console.log(newListItem);
    e.preventDefault();
  }

  //>>>>> listItems needs to be a state. Then the component will re-render when it is updated.
  //>>>>> listItems array may possibly be re-initialized as an empty array when the component re-renders.
  var listItems = [];


  /*============================================================================================
                                   Component return
  =============================================================================================*/


  return (
    <div className="App">
      
      <h2>Simple List</h2>

      <Button onClick={changeOpen}>
        Add to the List
      </Button>


      <Modal show={show} onHide={changeClose}>
        <Modal.Header closeButton>
          <Modal.Title>This is the Title</Modal.Title>
        </Modal.Header>
              <form onSubmit={addToList}>
                <Modal.Body>               
                    <Form.Group>
                      <Form.Label>Item</Form.Label>
                      <br />
                      {/* When user enters text in Form.Control, updateList captures the text. */}
                      <Form.Control type="text" placeholder="Normal text" onChange={updateList} />
                    </Form.Group>
                </Modal.Body>
                    <Modal.Footer>
                    <Button type="sumbit">Add to List</Button>
                    </Modal.Footer>
              </form>
      </Modal>



      {/* List goes here */}
      <ul>
        {listItems.map(item =>(
          <li>{item}</li>
        ))}
      </ul>


    </div>
  );
}

export default App;




