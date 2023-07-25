import { useEffect, useRef, useState } from "react";

// import { NumericFormat } from "react-number-format";

// export const NumberFormatInput = (props: any) => {
//   return (
//     <NumericFormat
//       thousandSeparator="."
//       decimalSeparator=","
//       allowNegative={false}
//       onWheel={(e: any) => e.target.blur()}
//       {...props}
//     />
//   );
// };

const numberRegex = /^([-]{0,1})([0-9]{0,})([.]{0,1})([0-9]{0,})$/;
const isNumber = (value: string) => numberRegex.test(value);

const stringToNumber = (value: string) => {
  return value.replaceAll(".", "").replaceAll(",", ".");
};

const numberToString = (value: string, decimalScale: number) => {
  const temp = value.split(",");
  let result = "";
  if (temp[0])
    result = Number(temp[0].replaceAll(".", "")).toLocaleString("de-DE");
  if (temp[1] !== undefined) {
    let decimalPart = temp[1].replaceAll(".", "");
    if (decimalScale) {
      decimalPart = decimalPart.slice(0, decimalScale);
    }
    result = `${result},${decimalPart}`;
  }
  return result;
};

export const NumberFormat = ({
  value,
  defaultValue,
  decimalScale,
  ...props
}: any) => {
  const ref = useRef();
  // useEffect(()=>{
  //   handleChange(defaultValue)
  // },[defaultValue])
  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    const temp = stringToNumber(inputValue);

    if (isNumber(temp)) {
      props.onChange && props.onChange(temp);
      e.target.value = numberToString(inputValue, decimalScale);
    } else {
      const caret = e.target.selectionStart;
      e.target.value =
        inputValue.slice(0, caret - 1) +
        inputValue.slice(caret, inputValue.length);

      e.target.setSelectionRange(caret, caret - 1);
    }
  };
  return (
    <input
      {...props}
      ref={ref}
      onChange={handleChange}
      onPaste={(e: any) => {
        setTimeout(() => {
          const temp = stringToNumber(e.target.value);
          if (!isNumber(temp)) e.target.value = "";
        }, 0);
      }}
    />
  );
};
