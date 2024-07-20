
import { ru } from "date-fns/locale";
import { format, formatDistanceToNow, isToday, isYesterday } from "date-fns";

export function formatDate(date: Date): string {
    const now = new Date();
  
    if (isToday(date)) {
      return `Сегодня ${format(date, "HH:mm", { locale: ru })}`;
    }
  
    if (isYesterday(date)) {
      return `Вчера в ${format(date, "HH:mm", { locale: ru })}`;
    }
  
    return formatDistanceToNow(date, { addSuffix: true, locale: ru });
  }