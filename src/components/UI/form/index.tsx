import { useCallback, useState } from "react";
import styled from "styled-components";

const validates: any = {
  account: {
    regex: /^[a-z][a-z0-9_]{7,29}$/,
    error:
      "Tên đăng nhập gồm 8-30 kí tự, không được sử dụng chữ hoa và kí tự đặc biệt",
  },
  phone: {
    regex: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
    error: "Vui lòng nhập số điện thoại hợp lệ",
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    error: "Vui lòng nhập email hợp lệ",
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[^\w\s])\S{8,16}$/,
    error: "Vui lòng nhập mật khẩu hợp lệ",
  },
};

/*
<UIInput
  label="Tài khoản"
  {...register("name", "account")}
  value={values.name}
  onChange={(e: any) => {
    onChange("name", e.target.value);
  }}
  onBlur={() => validate("name", "account")}
  error={errors.name}
/>
*/

export const useForm = (defaultValues: any) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState<any>({});

  const [registers, setRegisters] = useState<any>({});

  const onChange = (name: string, value: any) => {
    setValues((prev: any) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const validate = (name: string, type?: string) => {
    const value = values[name];
    if (!value) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: "Không được để trống",
      }));
      return false;
    }

    const tempVal = validates[type || name];

    if (value && tempVal) {
      const check = value.match(tempVal.regex);
      if (!check) {
        console.log("error", tempVal.error);
        setErrors((prev: any) => ({ ...prev, [name]: tempVal.error }));
        return false;
      }
    }

    return true;
  };

  const register = (name: string, type?: string) => {
    if (!registers.hasOwnProperty(name)) {
      setRegisters((prev: any) => ({ ...prev, [name]: type }));
    }
    return {
      value: values[name],
      onChange: (e: any) => {
        onChange(name, e.target.value);
      },
      onBlur: () => {
        validate(name, type);
      },
      error: errors[name],
    };
  };

  const onSubmit = (callback?: any) => {
    const res = Object.keys(registers).map((name) => {
      return validate(name, registers[name]);
    });
    if (res.includes(false)) return false;

    callback && callback(values);
    return true;
  };

  return { values, errors, setValues, onChange, onSubmit, register };
};

export const ErrorMessage = ({ children }: any) => {
  if (!children) return null;
  return <SErrorMessage>{children}</SErrorMessage>;
};

const SErrorMessage = styled.div`
  font-size: 12px;
  color: red;
`;
