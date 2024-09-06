import './StudentsListItem.css';
import { Link } from "react-router-dom";

function StudentsListItem({ student }) {
  return (
    <>


      <div className="StudentsListItemContainer">

        <div className="StudentsListItemContainerID">
            <p className="StudentsListItemP"> {student.id ? student.id : "-"}</p>
        </div>

        <div className="StudentsListItemContainerName">
          <Link
            to={`/students/${student.id}`}
            state={{student: student}}
            className="StudentsListItemP">
              {student.firstName + " " + student.lastName}
          </Link>
        </div>

        <div className="StudentsListItemContainerStreet">
          <p className="StudentsListItemP">{student.street ? student.street: "-"}</p>
        </div>

        <div className="StudentsListItemContainerCity">
          <p className="StudentsListItemP">{student.city ? student.city: "-"}</p>
        </div>

        <div className="StudentsListItemContainerState">
          <p className="StudentsListItemP">{student.state ? student.state: "-"}</p>
        </div>

        <div className="StudentsListItemContainerZip">
          <p className="StudentsListItemP">{student.zip ? student.zip: "-"}</p>
        </div>

        <div className="StudentsListItemContainerPhone">
              {student.phone ?
              <Link to={`tel:${student.phone}`} className="StudentsListItemP">{student.phone}</Link>
              : <p className="StudentsListItemP">-</p>}
        </div>

        <div className="StudentsListItemContainerEmail">

              {student.email ?
              <Link to={`mailto:${student.email}`}className="StudentsListItemP">{student.email}</Link>
                : <p className="StudentsListItemP">-</p>}

        </div>


      </div>
      <div className="StudentsListItemBorder"></div>
    </>
  );
}

export default StudentsListItem;
