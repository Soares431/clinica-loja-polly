export type TimeSlot = {
  date: string; // formato YYYY-MM-DD
  times: string[];
};

function nextWeekdays(count: number): string[] {
  const dates: string[] = [];
  const today = new Date();
  let cursor = new Date(today);

  while (dates.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      dates.push(cursor.toISOString().split("T")[0]);
    }
  }
  return dates;
}

export const availability: TimeSlot[] = nextWeekdays(5).map((date, i) => ({
  date,
  times: i % 2 === 0
    ? ["09:00", "10:00", "14:00", "15:30"]
    : ["11:00", "13:00", "16:00"],
}));