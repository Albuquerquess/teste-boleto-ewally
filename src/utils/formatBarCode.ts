const formatBarCode = (barCode: string): string => {
  const barCodeFormated = barCode.replace(/\D/g, '');
  return barCodeFormated;
}

export { formatBarCode }