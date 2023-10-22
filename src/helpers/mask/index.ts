export const getDigits = (value?: string): string => value?.replace(/\D/g, '') ?? '';

export const formatCnpj = (value: string): string =>
  value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})(.*)/, '$1.$2.$3/$4-$5');

export const formatCpf = (value: string): string => value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})(.*)/, '$1.$2.$3-$4');

export const formatCnpjCpf = (value: string): string => {
  const digits = getDigits(value);
  if (!digits) return 'Número não encontrado.';
  if (digits.length === 11) {
    return formatCpf(digits);
  } else {
    return formatCnpj(digits);
  }
};

export const formatMoney = (value: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);

export const maskInputMoney = (value: string): string => {
  if (!value) {
    return '';
  }

  return (Number(value.replace(/\D/g, '')) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const unmaskInputMoney = (value: string): number => {
  return typeof value === 'number' ? value : Number(value.replace(/\D/g, '')) / 100;
};

export const formatPhone = (value: string): string => {
  const digits = getDigits(value);
  return digits.replace(/(\d{2})(\d{4,5})(\d{4})(.*)/, '($1) $2-$3');
};

export const formatCEP = (value: string): string => {
  return value.replace(/(\d{2})(\d{3})(\d{3})(.*)/, '$1.$2-$3');
};

export const onlyNumbers = (input: string | number): string => {
  return String(input).replace(/[^\d]/g, '');
};
export function isLastChar(index: number, input: string): boolean {
  return index === input.length - 1;
}
export const formatBoleto = (boleto: string) => {
  const digits = onlyNumbers(boleto);

  return digits
    .slice(0, 48)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, digits)) {
        if ([4, 14, 25].indexOf(index) >= 0) return `${result}.`;
        if ([9, 20, 31, 32].indexOf(index) >= 0) return `${result} `;
      }

      return result;
    }, '');
};

export const clipboard = (value: string) => {
  navigator.clipboard.writeText(value);
};

export function base64toBlob(base64Data: string, extensions: string) {
  let type = 'image/x-png';
  if (extensions === 'png') type = 'image/x-png';
  if (extensions === 'jpg' || extensions === 'jpeg') type = 'image/jpeg';
  if (extensions === 'pdf') type = 'application/pdf';
  if (extensions === 'gif') type = 'image/gif';
  if (extensions === 'svg') type = 'image/svg+xml';
  if (extensions === 'html') type = 'application/html';
  if (extensions === 'txt') type = 'application/txt';
  if (extensions === 'docx') type = 'application/msword';
  if (extensions === 'doc') type = 'application/msword';
  if (extensions === 'json') type = 'application/json';
  if (extensions === 'xlsx') type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: type });
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
