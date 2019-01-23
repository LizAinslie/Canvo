import ICoordinates from "../Interfaces/ICoordinates";

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
	 * @param {ICoordinates} pointA The line's initial `A` point
	 * @param {ICoordinates} pointB The line's initial `B` point
	 */
	constructor(pointA: ICoordinates, pointB: ICoordinates, color: string, width: number) {
		this.pointA = pointA;
		this.pointB = pointB;
		this.color = color;
		this.width = width
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

	private draw(ctx: CanvasRenderingContext2D): void {
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