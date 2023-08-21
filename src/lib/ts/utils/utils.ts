export function getDateDaysAgo(daysAgo: number): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - daysAgo);
  
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
  
    return `${year}/${month}/${day}`;
  }