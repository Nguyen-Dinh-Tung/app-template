import { useRef, useState } from "react";

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

const numberRegex = /^([0-9]{0,})([.]{0,1})([0-9]{0,})$/;

const stringToNumber = (value: any) => {
  let temp = value;
  temp = temp.replaceAll(".", "").replaceAll(",", ".");
  return temp;
};

const numberToString = (value: any) => {
  const temp = value.split(",");
  let result = "";
  if (temp[0]) result = Number(temp[0]).toLocaleString("de-DE");
  if (temp[1] !== undefined) result = `${result},${temp[1]}`;
  return result;
};

const isNumber = (value: string) => {
  const temp = value.split(",");

  return numberRegex.test(value);
};

export const NumberFormat = ({ value, ...props }: any) => {
  const ref: any = useRef();
  const [realValue, setRealValue] = useState("");
  const [formatedValue, setFormatedValue] = useState("");
  const handleChange = (e: any) => {
    const value = e.target.value;

    const temp = stringToNumber(value);
    console.log("changeee", value, isNumber(value));
    if (isNumber(value)) {
      //   props.onChange(temp);
      //   e.target.value = numberToString(value);
    } else {
      const caret = e.target.selectionStart;
      e.target.value =
        value.slice(0, caret - 1) + value.slice(caret, value.length);
      e.target.selectionStart = caret;
      e.target.selectionEnd = caret - 1;
    }
  };
  return (
    <input
      {...props}
      //   value={formatedValue}
      //   pattern={numberRegex}
      //   maxlength="5"
      ref={ref}
      onChange={handleChange}
    />
  );
};
