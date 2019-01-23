import ICoordinates from "../Interfaces/ICoordinates";

/**
 * A line
 */
class Line {
	public pointA: ICoordinates;
	public pointB: ICoordinates;

	/**
	 * Create a new Line
	 * @param {ICoordinates} pointA The line's initial `A` point
	 * @param {ICoordinates} pointB The line's initial `B` point
	 */
	constructor(pointA: ICoordinates, pointB: ICoordinates) {
		this.pointA = pointA;
		this.pointB = pointB;
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
}

export default Line;