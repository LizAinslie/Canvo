import ICoordinates from "./ICoordinates";

interface ILineOptions {
	pointA: ICoordinates;
	pointB: ICoordinates;
	color?: string;
	width?: number;
}

export default ILineOptions;
