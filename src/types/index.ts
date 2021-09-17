export interface FoodInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface FoodProps {
  food: FoodInterface;
  handleDelete: (id: number) => void;
  handleEditFood: (food: FoodInterface) => void;
}

export interface HeaderProps {
  openModal: () => void;
}

export type AddFoodInterface = Omit<FoodInterface, "id" | "available">;
export type UpdateFoodInterface = Omit<FoodInterface, "id" | "available">;

export interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: AddFoodInterface) => Promise<void>;
}

export type ModalProps = Omit<ModalAddFoodProps, "handleAddFood">;

export interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodInterface;
  handleUpdateFood: (food: UpdateFoodInterface) => Promise<void>;
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}
export type IconType = (props: IconBaseProps) => JSX.Element;

interface InputProps {
  name: string;
  label?: string;
  icon: IconType;
}
export type InputPropsUpdated = JSX.IntrinsicElements["input"] & InputProps;
