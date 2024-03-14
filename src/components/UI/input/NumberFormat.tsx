import { useEffect, useRef } from "react";

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

const stringToNumber = (
  value: string,
  thousandSeparator: string,
  decimalSeparator: string,
  decimalScale: number
) => {
  const temp = Number(
    value.replaceAll(thousandSeparator, "").replaceAll(decimalSeparator, ".")
  );
  return Math.floor(temp * 10 ** decimalScale) / 10 ** decimalScale;
};

const formatNumber = (
  num: any,
  decimalScale: number = 2,
  language: string = "en"
) => {
  return Number(num || 0).toLocaleString(language == "en" ? "en-EN" : "de-DE", {
    maximumFractionDigits: decimalScale,
  });
};

const characters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "Backspace",
];

interface Props {
  defaultValue: string;
  decimalScale: number;
  language?: "en" | "vi";
  onChange: (v: number) => void;
  [x: string]: any;
}

/* <NumberFormat
  defaultValue={"123456789"}
  onChange={(value: any) => {
    setNum(value);
  }}
/>; */

export const NumberFormat = ({
  defaultValue,
  decimalScale = 2,
  language = "en",
  onChange,
  ...props
}: Props) => {
  const ref: any = useRef();

  useEffect(() => {
    ref.current.value = formatNumber(defaultValue, decimalScale, language);
  }, [defaultValue, decimalScale, language]);

  const decimalSeparator = language == "en" ? "." : ",";
  const thousandSeparator = language == "en" ? "," : ".";
  const allowCharacters = characters.concat([decimalSeparator]);

  const hanleChange = (e: any) => {
    const floatValue = stringToNumber(
      e.target.value,
      thousandSeparator,
      decimalSeparator,
      decimalScale
    );

    const formattedValue = e.target.value
      ? formatNumber(floatValue, decimalScale, language)
      : "";
    if (e.target.value.slice(-1) !== decimalSeparator)
      e.target.value = formattedValue;

    onChange(floatValue);
  };

  return (
    <input
      {...props}
      ref={ref}
      onKeyDown={(e: any) => {
        if (!allowCharacters.includes(e.key)) {
          e.preventDefault();
        }

        if (
          e.key == decimalSeparator &&
          e.target.value.includes(decimalSeparator)
        ) {
          e.preventDefault();
        }
      }}
      onChange={hanleChange}
    />
  );
};
