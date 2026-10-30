export function formatDate(isoString: string): string {
  try {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  } catch {
    return isoString;
  }
}

export function formatTimeAgo(isoString: string): string {
  const diffMinutes = Math.floor((Date.now() - new Date(isoString).getTime()) / 60000);
  if (diffMinutes < 1) return 'Agora mesmo';
  if (diffMinutes === 1) return 'Há 1 minuto';
  if (diffMinutes < 60) return `Há ${diffMinutes} minutos`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours === 1) return 'Há 1 hora';
  return `Há ${diffHours} horas`;
}

