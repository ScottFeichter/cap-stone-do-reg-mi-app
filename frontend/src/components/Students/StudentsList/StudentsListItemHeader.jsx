import './StudentsListItemHeader.css';
// import { Link } from "react-router-dom";

function StudentsListItemHeader() {
  return (
    <>
      <div className="StudentsListItemHeaderContainer">

        <div className="StudentsListItemHeaderItemContainerID">
          <h4 className="StudentsListItemHeaderItemH4">ID</h4>
        </div>

        {/* <div className="StudentsListItemHeaderItemContainerED">
          <h4 className="StudentsListItemHeaderItemH4">ED</h4>
        </div> */}

        {/* <div className="StudentsListItemHeaderItemContainerAD">
          <h4 className="StudentsListItemHeaderItemH4">AD</h4>
        </div> */}

        <div className="StudentsListItemHeaderItemContainerName">
            <h4 className="StudentsListItemHeaderItemH4">Name</h4>
        </div>

        <div className="StudentsListItemHeaderItemContainerStreet">
            <h4 className="StudentsListItemHeaderItemH4">Street</h4>
        </div>

        <div className="StudentsListItemHeaderItemContainerCity">
            <h4 className="StudentsListItemHeaderItemH4">City</h4>
        </div>

        <div className="StudentsListItemHeaderItemContainerState">
            <h4 className="StudentsListItemHeaderItemH4">State</h4>
        </div>

        <div className="StudentsListItemHeaderItemContainerZip">
            <h4 className="StudentsListItemHeaderItemH4">Zip</h4>
        </div>

        <div className="StudentsListItemHeaderItemContainerPhone">
          <h4 className="StudentsListItemHeaderItemH4">Phone</h4>
        </div>

        <div className="StudentsListItemHeaderItemContainerEmail">
          <h4 className="StudentsListItemHeaderItemH4">Email</h4>
        </div>

        {/* <div className="StudentsListItemHeaderItemContainerLang">
          <h4 className="StudentsListItemHeaderItemH4">1st Lang</h4>
        </div> */}

        {/* <div className="StudentsListItemHeaderItemContainerLang">
          <h4 className="StudentsListItemHeaderItemH4">2nd Lang</h4>
        </div> */}

        {/* <div className="StudentsListItemHeaderItemContainerInst">
          <h4 className="StudentsListItemHeaderItemH4">1st Inst</h4>
        </div> */}

        {/* <div className="StudentsListItemHeaderItemContainerInst">
          <h4 className="StudentsListItemHeaderItemH4">2nd Inst</h4>
        </div> */}

      </div>

    </>
  );
}

export default StudentsListItemHeader;
