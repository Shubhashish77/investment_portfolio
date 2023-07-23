export const formatCurrency = (value) => {
    return '$' + value.toFixed(6).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};
