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

const formatNumber = (num: any, decimalScale: number) => {
  return Number(num || 0).toLocaleString("de-DE", {
    maximumFractionDigits: decimalScale,
  });
};

const getAllowCharacters = (decimalSeparator: string) => [
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
  decimalSeparator,
];

export const NumberFormat = ({
  value,
  decimalScale = 2,
  thousandSeparator = ".",
  decimalSeparator = ",",
  allowNegative = false,
  onChange,
  ...props
}: any) => {
  const ref = useRef();

  const allowCharacters = getAllowCharacters(decimalSeparator);

  const hanleChange = (e: any) => {
    const floatValue = stringToNumber(
      e.target.value,
      thousandSeparator,
      decimalSeparator,
      decimalScale
    );

    const formattedValue = floatValue
      ? formatNumber(floatValue, decimalScale)
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
