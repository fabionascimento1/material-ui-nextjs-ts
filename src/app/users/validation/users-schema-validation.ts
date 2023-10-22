import yup from "@/helpers/yup";

export const usersSchemaValidation = () => {
  return yup.object().shape({
    nome: yup
      .string()
      .required("Nome é obrigatório")
      .typeError("Nome é obrigatório")
      .label("Nome"),
    avatar: (yup.string() as any).required().isValidUrl().label("Avatar"),
  });
};
