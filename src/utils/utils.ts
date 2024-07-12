export function formatCurrency(value: number | string): string {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(value));
}

export function debounce(func: (...args: any[]) => void, wait: number): (...args: any[]) => void {
  let timeout: ReturnType<typeof setTimeout> | null;
  return function(this: any, ...args: any[]) {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

export function maskCEP(value: string) {
  let cep: string | false = value ? value.replace(/[^\d]/g, '') : false;

  if (cep && cep.length > 8) {
    cep = cep.slice(0, 8)
  }

  if (!cep) {
    return '';
  }

  let maskedCEP = '';
  const tamanho = cep.length;

  if (tamanho <= 3) {
    maskedCEP = `_____-${cep.padStart(3, "_")}`
  } else {
    const parte01 = cep.slice(0, -3);
    const parte02 = cep.slice(-3);
    maskedCEP = `${parte01.padStart(5, "_")}-${parte02}`
  }

  return maskedCEP; // Preenche com underline caso não tenha 8 dígitos ainda
};

export function validateCEP(value: string) {
  return ((value.replace(/\D/g, '')).length === 8) ? true : false;
}

export function unmaskValue(value: string) {
  if (!value) {
    return ""
  }

  const unmaskedValue = value.replace(/\D/g, '');
  
  return unmaskedValue;
};

export function truncateText(cityName: string, maxLength: number): string {
  return cityName.length > maxLength ? `${cityName.substring(0, maxLength)}...` : cityName;
}