import Swal from "sweetalert2";

const Alert = (
  name: string,
  icon:
    | "success"
    | "error"
    | "warning"
    | "info"
    | "question"
    | undefined = "success"
) => {
  return Swal.fire({
    title: name,
    icon: icon,
    position: "top-right",
    toast: true,
    showConfirmButton: false,
    timer: icon == "error" ? 3000 : 2000,
    timerProgressBar: true,
  });
};

export default Alert;
