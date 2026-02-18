import { useEffect, useState } from 'react';

export interface RamadanDay {
  r: number;
  date: string;
  s: string;
  i: string;
}

export interface CountdownState {
  hours: string;
  minutes: string;
  seconds: string;
  label: string;
  todayData: RamadanDay | null;
  isBeforeSehri: boolean;
  isDuringFast: boolean;
  isAfterIftar: boolean;
}

const RAMADAN_DATA: RamadanDay[] = [
  { r: 1, date: "Feb 19", s: "05:14", i: "18:12" },
  { r: 2, date: "Feb 20", s: "05:14", i: "18:12" },
  { r: 3, date: "Feb 21", s: "05:13", i: "18:12" },
  { r: 4, date: "Feb 22", s: "05:13", i: "18:13" },
  { r: 5, date: "Feb 23", s: "05:12", i: "18:13" },
  { r: 6, date: "Feb 24", s: "05:12", i: "18:13" },
  { r: 7, date: "Feb 25", s: "05:11", i: "18:14" },
  { r: 8, date: "Feb 26", s: "05:11", i: "18:14" },
  { r: 9, date: "Feb 27", s: "05:10", i: "18:14" },
  { r: 10, date: "Feb 28", s: "05:09", i: "18:14" },
  { r: 11, date: "Mar 01", s: "05:09", i: "18:15" },
  { r: 12, date: "Mar 02", s: "05:08", i: "18:15" },
  { r: 13, date: "Mar 03", s: "05:07", i: "18:16" },
  { r: 14, date: "Mar 04", s: "05:07", i: "18:16" },
  { r: 15, date: "Mar 05", s: "05:06", i: "18:16" },
  { r: 16, date: "Mar 06", s: "05:05", i: "18:16" },
  { r: 17, date: "Mar 07", s: "05:05", i: "18:17" },
  { r: 18, date: "Mar 08", s: "05:04", i: "18:17" },
  { r: 19, date: "Mar 09", s: "05:03", i: "18:17" },
  { r: 20, date: "Mar 10", s: "05:03", i: "18:17" },
  { r: 21, date: "Mar 11", s: "05:02", i: "18:17" },
  { r: 22, date: "Mar 12", s: "05:01", i: "18:18" },
  { r: 23, date: "Mar 13", s: "05:01", i: "18:18" },
  { r: 24, date: "Mar 14", s: "05:00", i: "18:18" },
  { r: 25, date: "Mar 15", s: "04:59", i: "18:18" },
  { r: 26, date: "Mar 16", s: "04:58", i: "18:18" },
  { r: 27, date: "Mar 17", s: "04:57", i: "18:19" },
  { r: 28, date: "Mar 18", s: "04:57", i: "18:19" },
  { r: 29, date: "Mar 19", s: "04:56", i: "18:19" },
  { r: 30, date: "Mar 20", s: "04:55", i: "18:19" }
];

export function useCountdown(): CountdownState {
  const [state, setState] = useState<CountdownState>({
    hours: '00',
    minutes: '00',
    seconds: '00',
    label: 'Loading...',
    todayData: null,
    isBeforeSehri: false,
    isDuringFast: false,
    isAfterIftar: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const todayStr = monthNames[now.getMonth()] + " " + String(now.getDate()).padStart(2, '0');

      let todayData = RAMADAN_DATA.find(d => d.date === todayStr);
      if (!todayData) {
        todayData = RAMADAN_DATA[0];
      }

      const currentYear = 2026;
      const sTime = new Date(`${todayData.date}, ${currentYear} ${todayData.s}:00`);
      const iTime = new Date(`${todayData.date}, ${currentYear} ${todayData.i}:00`);

      let targetDate: Date;
      let labelText: string;
      let isBeforeSehri = false;
      let isDuringFast = false;
      let isAfterIftar = false;

      if (now < sTime) {
        targetDate = sTime;
        labelText = "Sehri ပိတ်ရန် ကျန်ချိန်";
        isBeforeSehri = true;
      } else if (now >= sTime && now < iTime) {
        targetDate = iTime;
        labelText = "Iftar ဖွင့်ရန် ကျန်ချိန်";
        isDuringFast = true;
      } else {
        const currentIndex = RAMADAN_DATA.indexOf(todayData);
        if (currentIndex < RAMADAN_DATA.length - 1) {
          const nextDayData = RAMADAN_DATA[currentIndex + 1];
          targetDate = new Date(`${nextDayData.date}, ${currentYear} ${nextDayData.s}:00`);
          labelText = "မနက်ဖြန် Sehri ပိတ်ချိန်";
        } else {
          targetDate = now;
          labelText = "Ramadan ပြီးဆုံးသည်";
        }
        isAfterIftar = true;
      }

      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setState({
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
          label: labelText,
          todayData,
          isBeforeSehri,
          isDuringFast,
          isAfterIftar,
        });
      } else {
        setState(prev => ({
          ...prev,
          seconds: '00',
          label: labelText,
          todayData,
          isBeforeSehri,
          isDuringFast,
          isAfterIftar,
        }));
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return state;
}

export function convertTo12Hour(time24: string): string {
  const [hours, minutes] = time24.split(':');
  let h = parseInt(hours);
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  h = h ? h : 12;
  return `${String(h).padStart(2, '0')}:${minutes} ${ampm}`;
}

export function getRamadanData(): RamadanDay[] {
  return RAMADAN_DATA;
}
