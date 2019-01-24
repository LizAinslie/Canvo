import ICoordinates from '../Interfaces/ICoordinates';
import ILineOptions from '../Interfaces/ILineOptions';
import BasicColor from '../Enums/BasicColor';
import Width from '../Enums/Width';

/**
 * A line
 */
class Line {
	public pointA: ICoordinates;
	public pointB: ICoordinates;
	public color: string;
	public width: number;

	/**
	 * Create a new Line
	 * @param {ILineOptions} options Options to create the line with
	 * @param {ICoordinates} options.pointA The line's initial `A` point
	 * @param {ICoordinates} options.pointB The line's initial `B` point
	 * @param {string} [options.color] The line's initial color
	 * @param {number} [options.width] The line's initial width
	 */
	constructor(options: ILineOptions) {
		this.pointA = options.pointA;
		this.pointB = options.pointB;
		this.color = options.color || BasicColor.BLACK;
		this.width = options.width || Width.MD;
	}

	/**
	 * Set the line's `A` point
	 * @param {ICoordinates} newCoords The new coordinates for the line's point A
	 * @returns {void}
	 */
	public setPointA(newCoords: ICoordinates): void {
		this.pointA = newCoords;
	}

	/**
	 * Set the line's `B` point
	 * @param {ICoordinates} newCoords The new coordinates for the line's point B
	 * @returns {void}
	 */
	public setPointB(newCoords: ICoordinates): void {
		this.pointB = newCoords;
	}

	/**
	 * Draw the line on a canvas using a CanvasRenderingContext2D
	 * @param {CanvasRenderingContext2D} ctx The context to render the line with
	 * @returns {void}
	 */
	public draw(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.moveTo(this.pointA.x, this.pointA.y);
		ctx.lineTo(this.pointB.x, this.pointB.y);
		ctx.strokeStyle = this.color || 'black';
		ctx.lineWidth = this.width || 1;
		ctx.stroke();
		ctx.moveTo(this.pointA.x, this.pointA.y)
	}
}

export default Line;