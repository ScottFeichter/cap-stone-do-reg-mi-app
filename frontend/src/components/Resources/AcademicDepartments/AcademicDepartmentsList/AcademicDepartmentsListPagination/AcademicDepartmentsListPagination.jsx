import './EmployeeListAcademicDepartmentsListPagination.css'

function AcademicDepartmentsListPagination({ employeesPerPage, totalPages, paginate }) {
    let pages = [];

    for (let i = 1; i < Math.ceil(totalPages / employeesPerPage); i++) {
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
