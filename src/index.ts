import IEditorOptions from './Interfaces/IEditorOptions';

/**
 * A Canvo editor
 */
class Editor {
	/**
	 * Items currently in the editor
	 */
	public items: any[];
	/**
	 * The canvas element used to render the editor
	 */
	public canvas: HTMLCanvasElement;
	/**
	 * The rendering context of the editor's canvas
	 */
	public c: CanvasRenderingContext2D;

	/**
	 * Create a new Canvo editor
	 * @param {IEditorOptions} options The options to bootstrap the editor with
	 * @param {HTMLCanvasElement|string} options.canvas The canvas to use with the Canvo editor, or a string with its ID
	 * @returns {Editor} The newly created editor
	 */
	constructor(options: IEditorOptions) {
		if (options.canvas instanceof HTMLCanvasElement) this.canvas = options.canvas;
		else this.canvas = <HTMLCanvasElement>document.getElementById(options.canvas);

		this.c = this.canvas.getContext('2d');

		// Bind events
		this.handleMouseDown = this.handleMouseDown.bind(this);

		this.initEvents();
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