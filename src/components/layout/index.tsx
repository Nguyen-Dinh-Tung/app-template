import styled from "styled-components";

export const Container = styled.div`
  width: 1170px;
  padding: 0 15px;
  margin: 0 auto;

  @media only screen and (max-width: 1350px) {
    width: 1170px;
  }

  @media only screen and (max-width: 1199px) {
    width: 970px;
  }
  @media only screen and (max-width: 991px) {
    width: 750px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const convertWidths = (widths: any) => {
  return widths
    ?.map((width: any, ind: number) => {
      return `
        > :nth-child(${ind + 1}) {
          width: ${width};
        }
      `;
    })
    .join("");
};

export const FlexBox = styled.div<any>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${({ widths }: any) => widths && convertWidths(widths)};
  gap: ${({ gap }) => gap};

  ${(props: any) => {
    let customCss = "";
    const keys = Object.keys(props);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key.match(/widths-/)) {
        const temp = key.split("widths-");
        customCss =
          customCss +
          `@media only screen and (max-width: ${temp[1]}) {
              ${convertWidths(props[key])}
            }          
          `;
        delete props[key];
      }
    }
    return customCss;
  }}
`;
