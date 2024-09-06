import './AcademicListAcademicDepartmentsListPagination.css'

function AcademicDepartmentsListPagination({ AcademicsPerPage, totalPages, paginate }) {
    let pages = [];

    for (let i = 1; i < Math.ceil(totalPages / AcademicsPerPage); i++) {
      pages.push(i);
    }

    return (
      <>
        <div className="AcademicDepartmentsListPagination">
          {pages.map((number, index) => {
            return (
              <a onClick={() => paginate(number)} key={index} href="#">
                {number}
              </a>
            );
          })}
        </div>
      </>
    );
  }

  export default AcademicDepartmentsListPagination;
