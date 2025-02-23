export interface Fruta {
    id: number;
    nombre: string;
    precio: number;
    favorita: boolean;
    anadido?: boolean; // Opcional, solo necesario para la vista de productos
  }