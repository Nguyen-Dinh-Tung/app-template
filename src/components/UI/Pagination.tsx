import React from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "assets/svg/left-arrow.svg";

const pageGroup = 3;

const getPageArr2 = (currentPage: number, totalPage: number) => {
  const start = Math.floor((currentPage - 1) / pageGroup) * pageGroup;
  let result: any = Array(pageGroup)
    .fill("")
    .map((p: any, ind: number) => {
      const temp = start + ind + 1;
      if (temp > totalPage) return null;
      else return temp;
    })
    .filter((p: any) => p);
  return result;
};

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
  onClickPage: (page: number) => void;
}

export const Pagination = ({
  page,
  pageSize,
  totalCount,
  onClickPage,
}: Props) => {
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
            if (page > 1) onClickPage(page - 1);
          }}
        >
          <LeftArrow />
        </div>
      )}

      {start > 1 && (
        <div
          onClick={() => {
            onClickPage(1);
          }}
        >
          1
        </div>
      )}
      {start > 2 && (
        <div
          onClick={() => {
            const temp = page - 3 > 1 ? page - 3 : 1;
            onClickPage(temp);
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
            onClickPage(num);
          }}
        >
          {num}
        </div>
      ))}

      {last < totalPage - 1 && (
        <div
          onClick={() => {
            const temp = page + 3 < totalPage ? page + 3 : totalPage;
            onClickPage(temp);
          }}
        >
          ...
        </div>
      )}
      {last < totalPage && (
        <div
          onClick={() => {
            onClickPage(totalPage);
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
            if (page < totalPage) onClickPage(page + 1);
          }}
        >
          <LeftArrow />
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

  .right-arrow {
    transform: rotate(180deg);
  }

  .selected {
    background: ${({ theme }: any) => theme.primary};
    color: white;
  }
`;
