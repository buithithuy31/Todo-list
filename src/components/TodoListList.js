import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button, Row, Col } from "react-bootstrap";
import { deleteList, addDone, deleteDone } from "../redux/actions/listActions";
import Message from "./Message";

const TodoListList = () => {
  const data = useSelector((state) => state.todoItems);
  // console.log(data)
  const dispatch = useDispatch();

  const { todoList, repeat } = data;
  // console.log(repeat)

  const handleDelete = (name) => {
    dispatch(deleteList(name));
  };

  const handleComplete = (name) => {
    dispatch(addDone(name));
  };

  const handleNotComplete = (name) => {
    dispatch(deleteDone(name));
  };

  if (todoList.length > 0) {
    return (
      <>
        {repeat && (
          <Message variant="danger">This note is already added</Message>
        )}
        <ListGroup>
          {todoList.map((list) => (
            <ListGroup.Item
              variant={list.complete === true ? "success" : "primary"}
              key={list.name}
            >
              <Row>
                <Col md={8} xs={8}>
                  {" "}
                  - {list.name}
                </Col>
                <Col md={2} xs={2}>
                  {list.complete === true ? (
                    <Button
                      variant="success"
                      onClick={() => handleNotComplete(list.name)}
                    >
                      <i className="fas fa-check"></i>
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      onClick={() => handleComplete(list.name)}
                    >
                      <i className="fas fa-eraser"></i>
                    </Button>
                  )}
                </Col>

                <Col md={2} xs={2}>
                  <Button
                    variant="dark"
                    onClick={() => {
                      if (window.confirm("Do you want to delete it?")) {
                        handleDelete(list.name);
                      }
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  } else {
    return (
      <ListGroup>
        <ListGroup.Item className="text-center">
          Nothing to do yet
        </ListGroup.Item>
      </ListGroup>
    );
  }
};

export default TodoListList;
