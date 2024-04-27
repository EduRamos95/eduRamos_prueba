/* formateDate: DATE TIME -> "YY:MM:DD HH:MM:SS" */
export function formateDate(dateTime: Date): string {
  const year = dateTime.getFullYear();
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
  const day = dateTime.getDate().toString().padStart(2, '0');
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const seconds = dateTime.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
