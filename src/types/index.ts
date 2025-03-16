import { ReactNode, FormEvent, Ref } from "react";

export interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  className?: string;
  ref?: Ref<HTMLInputElement>; // ✅ Add ref property
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface formProps {
  children: ReactNode;
  action: (formData: FormData) => void;
  className?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  actionButton?: boolean;
  bgColor?: string;
  className?: string;
  disabled?: boolean;
}

export interface todoProps {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}
