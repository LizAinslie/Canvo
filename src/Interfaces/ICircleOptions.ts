import ICoordinates from './ICoordinates';
import IShapeOutline from './IShapeOutline';

interface ICircleOptions {
	center: ICoordinates;
	radius: number;
	color?: string;
	outline?: IShapeOutline;
}

export default ICircleOptions;
