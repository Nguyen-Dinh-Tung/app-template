import { UIButton } from "components/UI/Button";
import { UIFade } from "components/UI/Fade";
import { UIList } from "components/UI/List";
import { UISlider } from "components/UI/Slider";
import { UIInput } from "components/UI/input/Input";
import { UISelect } from "components/UI/Select";
import { UIModal } from "components/UI/modal";
import { importExcelFile } from "libs/file";
import { useState } from "react";
import styled from "styled-components";
import { toast } from "components/UI/toast";
import { Pagination } from "components/UI/Pagination";

export const HomeScreen = (props: any) => {
  const [num, setNum] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [select, setSelect] = useState("");
  return (
    <Styles>
      <UISelect
        options={Array(10)
          .fill("")
          .map((item, index: number) => ({
            label: "Label" + index,
            value: index,
          }))}
        value={select}
        onChange={(v: any) => setSelect(v)}
      />
      <UISlider
        items={Array(50).fill("")}
        slidesToShow={10}
        responsive={[
          { breakpoint: 1199, slidesToShow: 3 },
          { breakpoint: 767, slidesToShow: 2 },
          { breakpoint: 480, slidesToShow: 1 },
        ]}
      >
        {(item: any, index: number) => {
          return (
            <div className="slide-item" onClick={() => setOpen(true)}>
              {index + 1}
            </div>
          );
        }}
      </UISlider>

      <UIInput
        isFormatNumber
        // value={num}
        onChange={(value: any) => {
          setNum(value);
        }}
      />
      <input
        type="file"
        onChange={async (e: any) => {
          const data = await importExcelFile(e.target.files[0]);

          const en: any = {};
          const vi: any = {};
          data?.map((d: any) => {
            en[d.en.toLowerCase()] = d.en;
            vi[d.en.toLowerCase()] = d.vi || "";
            return "";
          });
          console.log("fileeeee", en, vi);
          e.target.value = "";
        }}
      />
      <Pagination page={1} pageSize={10} totalCount={45} onChange={() => {}} />
      <UIButton
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal1
      </UIButton>
      <UIModal isOpen={isOpen} close={() => setOpen(false)} label="Headerrrrr">
        <div style={{ width: "600px", height: "100px" }}>AAAAAAAA</div>
      </UIModal>
      <UIList
        items={Array(1).fill("")}
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "center",
        }}
      >
        {(item: any, ind: number) => {
          return (
            <UIFade right>
              <div className="slide-item">{ind}</div>
            </UIFade>
          );
        }}
      </UIList>
    </Styles>
  );
};

const Styles = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .slide-item {
    width: 200px;
    height: 200px;
    color: white;
    background: blue;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
`;
