import { useCallback, useState } from "react";
import styled from "styled-components";

const validates: any = {
  username: {
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

export const useForm = (defaultValues: any) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState<any>({});

  const onChange = (name: string, value: any) => {
    setValues((prev: any) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: "" }));
  };

  const validate = useCallback((name: string, value: any, label?: string) => {
    if (!value) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: "Vui lòng nhập " + label,
      }));
      return false;
    }

    const tempVal = validates[name];

    if (value && tempVal) {
      const check = value.match(tempVal.regex);
      if (!check) {
        setErrors((prev: any) => ({ ...prev, [name]: tempVal.error }));
        return false;
      }
    }

    return true;
  }, []);

  const handleSubmit = () => {
    const res = Object.keys(defaultValues).map((name) =>
      validate(name, values[name])
    );
    if (res.includes(false)) return false;
  };
  return { values, errors, onChange, validate, handleSubmit };
};

export const UIForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const ErrorMessage = ({ children }: any) => {
  if (!children) return null;
  return <SErrorMessage>{children}</SErrorMessage>;
};

const SErrorMessage = styled.div`
  font-size: 12px;
  color: red;
`;
