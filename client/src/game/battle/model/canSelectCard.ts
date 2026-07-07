// battle/model/canSelectCard.ts (новый файл)
// Правило игры: карту в руке можно выбрать только когда её countdown истёк (<= 0).
// Раньше это условие (countdown > 0) жило прямо в UI-компоненте HandCard вперемешку
// с анимацией "дрожания" — здесь оно отделено, чтобы быть переиспользуемым и тестируемым
// независимо от React.
export function canSelectCard(countdown: number): boolean {
  return countdown <= 0;
}
