import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  containerStyles?: string;
  textStyles?: string;
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyle?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}


export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface CarProps {
  
  
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission:string;
    year: number;
  

}

export interface FilterProps {
  manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
  }

export interface OptionProps{
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}