import { useState } from "react";
import styled from "styled-components";

const emptyString = "Không được để trống";

export const regexOb: any = {
  account: {
    regex: /^[a-z][a-z0-9_]{7,29}$/,
    message:
      "Tên đăng nhập gồm 8-30 kí tự, không được sử dụng chữ hoa và kí tự đặc biệt",
  },
  phone: {
    regex: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
    message: "Vui lòng nhập số điện thoại hợp lệ",
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Vui lòng nhập email hợp lệ",
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[^\w\s])\S{8,16}$/,
    message: "Vui lòng nhập mật khẩu hợp lệ",
  },
};

/* <UIInput
  label="Tài khoản"
  placeholder="Nhập tài khoản"
  {...register("name", {
    required: true,
    validateRegex: "account",
    pattern: {
      regex: /[A-Za-z]{3}/,
      message: "Không đúng định dạng",
    },
    validate: (value: any) => {
      if (value !== "1") return "Không được khác 1";
    },
  })}
/>; */

export const useForm = (defaultValues?: any) => {
  const [values, setValues] = useState(defaultValues || {});
  const [errors, setErrors] = useState<any>({});

  const [registers, setRegisters] = useState<any>({});

  const onChange = (name: string, value: any) => {
    setValues((prev: any) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const onChangeErrors = (name: string, message: string) => {
    setErrors((prev: any) => ({ ...prev, [name]: message }));
  };

  const register = (name: string, config: any) => {
    if (!registers.hasOwnProperty(name)) {
      setRegisters((prev: any) => ({ ...prev, [name]: config }));
    }
    return {
      value: config.value !== undefined ? config.value : values[name],
      onChange: (e: any) => {
        if (config.onChange) {
          config.onChange(e);
        } else onChange(name, e.target.value);
      },
      onBlur: () => {
        validate(name);
      },
      error: errors[name],
    };
  };

  const validate = (name: string) => {
    const value = values[name];
    const registerConfig = registers[name];

    if (registerConfig?.required && !value) {
      onChangeErrors(name, emptyString);
      return false;
    }

    if (value && registerConfig?.pattern) {
      const check = value.match(registerConfig?.pattern.regex);
      if (!check) {
        onChangeErrors(name, registerConfig?.pattern.message);
        return false;
      }
    }

    if (value && registerConfig?.validateRegex) {
      const temp = regexOb[registerConfig?.validateRegex];
      if (temp) {
        const check = value.match(temp.regex);
        if (!check) {
          onChangeErrors(name, temp.message);
          return false;
        }
      }
    }

    if (value && registerConfig?.validate) {
      const message = registerConfig.validate(value);
      if (message) {
        onChangeErrors(name, message);
        return false;
      }
    }

    return true;
  };

  const onSubmit = (callback?: (values: any) => void) => {
    const res = Object.keys(registers).map((name) => validate(name));
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
