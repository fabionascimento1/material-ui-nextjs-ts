export const REQUIRED_FIELD = '${path} é obrigatório.';
export const INVALID_FIELD = '${path} é inválido.';
export const MORE_THAN = '${path} deve ser maior que ${more}';
export const LESS_THAN = '${path} deve ser menor que ${less}';

export const mixed = {
  required: REQUIRED_FIELD,
  defined: REQUIRED_FIELD,
  notType: (args: any) => {
    const { path, type } = args;
    switch (type) {
      case 'number':
        return `${path} deve ser numérico.`;
    }
    return 'Valor inválido';
  },
};

export const string = {
  email: INVALID_FIELD,
};

export const number = {
  lessThan: LESS_THAN,
  moreThan: MORE_THAN,
};

export default {
  mixed,
  string,
  number,
};
