import styled from "styled-components";

const pageGroup = 3;

const getPageArr = (currentPage: number, totalPage: number) => {
  const result: any = [
    currentPage > totalPage - 1 ? currentPage - 2 : null,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ]
    .filter((p: any) => p > 0 && p <= totalPage)
    .slice(0, 3);
  return result;
};

interface Props {
  page: number;
  pageSize: number;
  totalCount: number;
  onChange: (page: number) => void;
}

export const Pagination = ({ page, pageSize, totalCount, onChange }: Props) => {
  const totalPage = Math.ceil(totalCount / pageSize);
  if (totalPage <= 1) return null;

  const pageArr = getPageArr(page, totalPage);
  const start = pageArr[0];
  const last = pageArr[pageArr.length - 1];

  return (
    <Styles className="page-wrap">
      {totalPage > pageGroup && (
        <div
          className="left-arrow"
          style={{ opacity: page > 1 ? "1" : "0.3" }}
          onClick={() => {
            if (page > 1) onChange(page - 1);
          }}
        >
          {"<"}
        </div>
      )}

      {start > 1 && (
        <div
          onClick={() => {
            onChange(1);
          }}
        >
          1
        </div>
      )}
      {start > 2 && (
        <div
          onClick={() => {
            const temp = page - 3 > 1 ? page - 3 : 1;
            onChange(temp);
          }}
        >
          ...
        </div>
      )}

      {pageArr.map((num: number, ind: number) => (
        <div
          className={num == page ? "selected" : ""}
          key={ind + 100}
          onClick={() => {
            onChange(num);
          }}
        >
          {num}
        </div>
      ))}

      {last < totalPage - 1 && (
        <div
          onClick={() => {
            const temp = page + 3 < totalPage ? page + 3 : totalPage;
            onChange(temp);
          }}
        >
          ...
        </div>
      )}
      {last < totalPage && (
        <div
          onClick={() => {
            onChange(totalPage);
          }}
        >
          {totalPage}
        </div>
      )}

      {totalPage > pageGroup && (
        <div
          className="right-arrow"
          style={{ opacity: page < totalPage ? "1" : "0.3" }}
          onClick={() => {
            if (page < totalPage) onChange(page + 1);
          }}
        >
          {">"}
        </div>
      )}
    </Styles>
  );
};

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
  > div {
    height: 32px;
    width: 32px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    color: #7f8c9b;
    cursor: pointer;
  }

  .selected {
    background: ${({ theme }: any) => theme.primary};
    color: white;
  }
`;
