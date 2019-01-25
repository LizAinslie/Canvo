import ICoordinates from '../Interfaces/ICoordinates';
import ICircleOptions from '../Interfaces/ICircleOptions';
import IShapeOutline from '../Interfaces/IShapeOutline';
import BasicColor from '../Enums/BasicColor';

/**
 * A circle
 */
class Circle {
	/**
	 * Coordinates of the circle's center
	 */
	public center: ICoordinates;

	/**
	 * The circle's color. If none is specified, it will default to black.
	 */
	public color: string;

	/**
	 * The radius of the circle
	 */
	public radius: number;

	/**
	 * The outline properties of the circle, if any. If there are none, the circle will have no outline.
	 */
	public outline: IShapeOutline;

	/**
	 * The radius of the circle handles
	 */
	private handlesRadius: number = 15;

	/**
	 * Create a new Circle
	 */
	constructor(options: ICircleOptions) {
		this.center = options.center;
		this.radius = options.radius;
		this.color = options.color || BasicColor.BLACK;
		this.outline = options.outline || {
			color: BasicColor.BLACK,
			width: 0
		};
	}

	/**
	 * Draw the circle on a canvas using a CanvasRenderingContext2D
	 * @param {CanvasRenderingContext2D} ctx The context to render the circle with
	 * @returns {void}
	 */
	public draw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
		ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = this.color;
      	ctx.fill();
		if (this.outline) {
			ctx.strokeStyle = this.outline.color;
			ctx.lineWidth = this.outline.width;
			ctx.stroke();
		}
	}

	/**
	 * Initialise events for the editor
	 * @param {CanvasRenderingContext2D} ctx The context to render event driven objects with
	 * @param {HTMLCanvasElement} canvas The canvas element to attach events to
	 * @returns {void}
	 */
	public initEditorEvents(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
		// Do stuff here later
	}
}

export default Circle;