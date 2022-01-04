import { Pagination } from "react-bootstrap";

function CustomPagination({ newsData, activeTab, change, pageSize }) {
  let totalPages = newsData / pageSize;
  totalPages = Math.ceil(totalPages);
  let listItems = [
    <Pagination.Item
      key={`firstPg-${1}`}
      tabIndex={1}
      active={activeTab === 1}
      onClick={(e) => change(e.target.tabIndex)}
    >
      {1}
    </Pagination.Item>,
  ];

  if (activeTab >= 4 && (activeTab - 2) !== 2) {
    listItems.push(
      <Pagination.Ellipsis key={`fdot-${activeTab}`} disabled />
    );
  }

  for (let number = (activeTab - 2); number < activeTab; number++) {
    if (number !== 1 && activeTab > 2 && number < totalPages) {
      listItems.push(
        <Pagination.Item
          key={`pgNo-${number}`}
          tabIndex={number}
          active={number === activeTab}
          onClick={(e) => change(e.target.tabIndex)}
        >
          {number}
        </Pagination.Item>
      );
    }
  }

  for (let number = activeTab; number <= (activeTab + 2); number++) {
    if (number !== 1 && number < totalPages) {
      listItems.push(
        <Pagination.Item
          key={`pgNo-${number}`}
          tabIndex={number}
          active={number === activeTab}
          onClick={(e) => change(e.target.tabIndex)}
        >
          {number}
        </Pagination.Item>
      );
    }
  }

  if (activeTab < (totalPages - 2) && (activeTab + 2) !== (totalPages - 1)) {
    listItems.push(
      <Pagination.Ellipsis key={`dot-${activeTab}`} disabled />
    );
  }

  listItems.push(
    <Pagination.Item
      key={`lastPg-${totalPages}`}
      tabIndex={totalPages}
      active={activeTab === totalPages}
      onClick={(e) => change(e.target.tabIndex)}
    >
      {totalPages}
    </Pagination.Item>
  );

  return (
    <Pagination>
      <Pagination.Prev onClick={() => change(activeTab - 1)} disabled={activeTab === 1}/>
      {listItems}
      <Pagination.Next onClick={() => change(activeTab + 1)} disabled={activeTab === totalPages} />
    </Pagination>
  );
}

export default CustomPagination;
