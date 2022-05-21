import {Colors} from "./Colors";
import {Figure} from "./figure/Figure";
import {Board} from "./Board";

export class Cell{
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number;

    constructor(board:Board, x:number, y:number, color:Colors, figure:Figure|null ) {
    }
}
