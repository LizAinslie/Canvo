import IEditorOptions from './Interfaces/IEditorOptions';
import Drawable from './Types/Drawable';

/**
 * A Canvo editor
 */
class Editor {
	/**
	 * Items currently in the editor
	 */
	public items: Drawable[];
	/**
	 * The canvas element used to render the editor
	 */
	public canvas: HTMLCanvasElement;
	/**
	 * The rendering context of the editor's canvas
	 */
	public c: CanvasRenderingContext2D;
	/**
	 * The rendering div for the editor's controls
	 */
	private controlsDiv?: HTMLElement;

	/**
	 * Create a new Canvo editor
	 * @param {IEditorOptions} options The options to bootstrap the editor with
	 * @param {HTMLCanvasElement|string} options.canvas The canvas to use with the Canvo editor, or a string with its ID
	 * @param {HTMLElement|string} options.controls The element to render the editor's controls in, or a string with its ID
	 * @returns {Editor} The newly created editor
	 */
	constructor(options: IEditorOptions) {
		if (options.canvas instanceof HTMLCanvasElement) this.canvas = options.canvas;
		else this.canvas = <HTMLCanvasElement>document.getElementById(options.canvas);

		if (options.controls) {
			if (options.controls instanceof HTMLElement) this.controlsDiv = options.controls;
			else this.controlsDiv = document.getElementById(options.controls);
		}

		this.c = this.canvas.getContext('2d');

		// Bind events
		this.handleMouseDown = this.handleMouseDown.bind(this);

		this.initEvents();
	}

	/**
	 * Add an item to the editor
	 * @param {Drawable} item The item to add
	 * @returns {void}
	 */
	public addItemToStage(item: Drawable): void {
		if (typeof item.draw !== 'function') throw new Error('Item must be drawable (have a draw() method that accepts a CanvasRenderingContext2D as parameter `ctx`)');
		this.items.push(item);
	}

	/**
	 * Initialise canvas events
	 * @returns {void}
	 */
	private initEvents(): void {
		this.canvas.addEventListener('mousedown', this.handleMouseDown);
	}

	/**
	 * `mouseDown` event handler
	 * @param {MouseEvent} e The mouse event emitted by mouseDown
	 * @returns {void}
	 */
	private handleMouseDown(e: MouseEvent): void {
		// Do stuff here later...
	}
}

export default Editor;

export * from './Objects/Line';
