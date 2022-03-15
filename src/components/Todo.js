import { TodoModel } from "model/todo";
import { TodoStatus } from "model/todoStatus";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskFromAPI } from "redux/ducks/task";
import Spinner from "shared/spinner/spinner";
import AxiosClient from "tools/axios";

const Todo = ({ t = new TodoModel() }) => {
  //state
  const [isLoadoing, setIsLoadoing] = useState(false);
  //get connectedUserId from redux store
  const connectedUserId = useSelector((s) => s.auth.user.id);
  //redux actions
  const call = useDispatch()
  
  //_____Actions___
  const handleClickDelete = () => {
    //use axios to delete task
    if (window.confirm("Are you sure 😨 ?")) {
      setIsLoadoing(true);
      AxiosClient.delete(`users/${connectedUserId}/todos/${t.id}`)
        .then(_ => {
          call(deleteTaskFromAPI({todoId:t.id}))
          setIsLoadoing(false);
        })
        .catch(_ => {
          setIsLoadoing(false);
        });
    }
  };

  return (
    <li
      style={{ opacity: isLoadoing ? ".7" : "1" }}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span
        className={
          t.status === TodoStatus.DONE
            ? "text-decoration-line-through fs-5"
            : "fs-5"
        }
      >
        {t.title}
      </span>
      {isLoadoing ? <Spinner color="danger" /> : null}
      <div>
        <button className="btn btn-danger me-2 p-1" onClick={handleClickDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <button
          className="btn btn-warning p-1"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="fas fa-edit"></i>{" "}
        </button>
      </div>
    </li>
  );
};

export default Todo;
