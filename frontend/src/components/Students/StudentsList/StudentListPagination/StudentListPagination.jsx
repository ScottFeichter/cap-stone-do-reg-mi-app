import './StudentListPagination.css'

function Pagination({ studentsPerPage, totalPages, paginate }) {
    let pages = [];

    for (let i = 1; i < Math.ceil(totalPages / studentsPerPage); i++) {
      pages.push(i);
    }

    return (
      <>
        <div className="pagination">
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

  export default Pagination;
