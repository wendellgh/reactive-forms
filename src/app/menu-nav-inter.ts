export interface MenuNavInter {

  label: string;
  icon: string;
  route?: string;
  children?: MenuNavInter[]; // Para os submenus
  expanded?: boolean;   // Controle de estado
}
