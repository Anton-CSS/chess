import {Colors} from "../Colors";
import logo from '../../assets/black-king.png';
import {Cell} from "../Cell";

export enum FigureNames{

}

export class Figure {
    color:Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
    }
}