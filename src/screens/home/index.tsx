import { UIButton } from "components/UI/Button";
import { UISlider } from "components/UI/Slider";
import { UIInput } from "components/UI/input/Input";
import { UIModal } from "components/UI/modal";
import { importExcelFile } from "libs/file";
import { useState } from "react";
import styled from "styled-components";

export const HomeScreen = (props: any) => {
  const [num, setNum] = useState("");
  const [isOpen, setOpen] = useState(false);
  return (
    <Styles>
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
      <UIButton
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </UIButton>
      <UIModal isOpen={isOpen} close={() => setOpen(false)} label="Headerrrrr">
        <div style={{ width: "600px", height: "1000px" }}>AAAAAAAA</div>
      </UIModal>
    </Styles>
  );
};

const Styles = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .slide-item {
    width: 100px;
    height: 100px;
    color: white;
    background: blue;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
`;
