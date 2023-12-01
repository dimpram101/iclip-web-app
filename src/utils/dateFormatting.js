export default formatDate = (inputDate) => {
    const dateParts = inputDate.split(' ');
    const date = dateParts[0];
    const time = dateParts[1];
  
    const [year, month, day] = date.split('-');
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
  
    const monthName = months[parseInt(month, 10) - 1];
  
    const formattedDate = `${day} ${monthName} ${year}`;
  
    return formattedDate;
  };
  