import { IEditorOptions, ICoordinates } from './api';

class Editor {
	/**
	 * The editor's canvas
	 */
	private canvas: HTMLCanvasElement;
	/**
	 * The rendering context of the editor's canvas
	 */
	public c: CanvasRenderingContext2D;
	/**
	 * Whether or not the user is drawing on the canvas
	 */
	public isDrawing: boolean = false;
	/**
	 * @ignore
	 */
    private lastX: number;
	/**
	 * @ignore
	 */
    private lastY: number;
	/**
	 * The default brush width, defined when the editor is created
	 */
    private defaultLineWidth: number;
	/**
	 * The default brush color, defined when the editor is created
	 */
    private defaultColor: string;

	/**
	 * Create a new editor
	 * @param {IEditorOptions} options The editor options to bootstrap the editor with
	 * @param {string} options.canvasId The ID of the canvas to use with the editor
	 * @param {object} [options.defaults] The default values to bootstrap the editor with
	 * @param {string} [options.defaults.color] The editor's default brush color
	 * @param {number} [options.defaults.lineWidth] The editor's default brush width
	 * @param {number} [options.defaults.height] The editor's default height
	 * @param {number} [options.defaults.width] The editor's default width
	 * @returns {Editor}
	 */
	constructor(options: IEditorOptions) {
        this.canvas = <HTMLCanvasElement> document.getElementById(options.canvasId);
        this.c = this.canvas.getContext('2d');

        this.canvas.style.width = options.defaults.width ? `${options.defaults.width}px` : '100%';
        this.canvas.style.height = options.defaults.height ? `${options.defaults.height}px` : '100%';
        this.canvas.height = options.defaults.height || this.canvas.clientHeight;
        this.canvas.width = options.defaults.width || this.canvas.clientWidth;

        this.defaultLineWidth = options.defaults.lineWidth || 7;
        this.defaultColor = options.defaults.color || '#000000';

        this.draw = this.draw.bind(this);
        this.initEvents = this.initEvents.bind(this);
        this.toDataUri = this.toDataUri.bind(this);
        this.setColor = this.setColor.bind(this);
        this.setLineWidth = this.setLineWidth.bind(this);
        this.setDefaults = this.setDefaults.bind(this);
		this.stopDrawing = this.stopDrawing.bind(this);

        this.initEvents();
        this.setDefaults();
	}

	/**
	 * Initialize canvas events
	 * @returns {void}
	 * @ignore
	 */
    private initEvents(): void {
        this.canvas.addEventListener('mousedown', (e: MouseEvent): void => {
			if (e.button == 0) {
				this.isDrawing = true;
				[this.lastX, this.lastY] = [e.offsetX, e.offsetY];
			} else return;
        });

        this.canvas.addEventListener('mousemove', this.draw);
        this.canvas.addEventListener('mouseup', this.stopDrawing);
        this.canvas.addEventListener('mouseout', this.stopDrawing);
    }

	/**
	 * Set `isDrawing` to false if correct mouse button is released.
	 * @param {MouseEvent} e
	 * @returns {void}
	 * @ignore
	 */
	private stopDrawing(e: MouseEvent): void {
		if (e.button == 0) {
			this.isDrawing = false;
		} else return;
	}

	/**
	 * Set the brush color
	 * @param {string} newColor The new brush color
	 * @returns {void}
	 */
	public setColor(newColor: string): void {
		this.c.strokeStyle = newColor;
	}

	/**
	 * Set the brush width
	 * @param {string} newColor The new brush width
	 * @returns {void}
	 */
    public setLineWidth(newWidth: number): void {
        this.c.lineWidth = newWidth;
    }

	/**
	 * Loads an image from a data URI, and resizes the canvas to the size of the image
	 * @param {string} dataUri The data uri of the image to load
	 * @returns {void}
	 */
	public loadBackgroundImageFromDataUri(dataUri: string): void {
		const img: HTMLImageElement = new Image;

        img.onload = (): void => {
            this.canvas.style.width = `${img.width}px`;
            this.canvas.style.height = `${img.height}px`;
            this.canvas.width = img.width;
            this.canvas.height = img.height;

            this.setDefaults();

            this.c.drawImage(img, 0, 0);
        };

        img.src = dataUri;
    }

	/**
	 * Place an image on the canvas at a specified location, using a data URI as the source
	 * @param {string} dataUri The data URI to load image data from
	 * @param {ICoordinates} placement The coordinates to place the image at
	 * @param {number} placement.x=0 The X coordinate to place the image at
	 * @param {number} placement.y=0 The Y coordinate to place the image at
	 * @returns {void}
	 */
	public loadImageFromDataUri(dataUri: string, placement: ICoordinates = { x: 0, y: 0 }): void {
		const img: HTMLImageElement = new Image;

        img.onload = (): void => {
            this.c.drawImage(img, placement.x, placement.y);
        };

        img.src = dataUri;
    }

	/**
	 * Export the current drawing to a data URI
	 * @returns {string} The exported data URI
	 */
    public toDataUri(): string {
        return this.canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    }

	/**
	 * Draws on the canvas, called on a mouse event.
	 * @param {MouseEvent} e A mouse event to attach to
	 * @returns {void}
	 * @ignore
	 */
    private draw(e: MouseEvent): void {
        if(!this.isDrawing) return;

        this.c.beginPath();
        this.c.moveTo(this.lastX, this.lastY);
        this.c.lineTo(e.offsetX, e.offsetY);
        this.c.stroke();
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    }

	/**
	 * Sets the default canvas values from the editor's configured values.
	 * @returns {void}
	 * @ignore
	 */
    private setDefaults(): void {
        this.c.lineJoin = 'round';
        this.c.lineCap = 'round';
        this.c.lineWidth = this.defaultLineWidth || 8;
        this.c.strokeStyle = this.defaultColor || '#000000';
    }
}

export default Editor;
