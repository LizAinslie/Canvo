import { IEditorOptions, ICoordinates } from './api';
declare class Editor {
    /**
     * The editor's canvas
     */
    private canvas;
    /**
     * The rendering context of the editor's canvas
     */
    c: CanvasRenderingContext2D;
    /**
     * Whether or not the user is drawing on the canvas
     */
    isDrawing: boolean;
    /**
     * @ignore
     */
    private lastX;
    /**
     * @ignore
     */
    private lastY;
    /**
     * The default brush width, defined when the editor is created
     */
    private defaultLineWidth;
    /**
     * The default brush color, defined when the editor is created
     */
    private defaultColor;
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
    constructor(options: IEditorOptions);
    /**
     * Initialize canvas events
     * @returns {void}
     * @ignore
     */
    private initEvents;
    /**
     * Set `isDrawing` to false if correct mouse button is released.
     * @param {MouseEvent} e
     * @returns {void}
     * @ignore
     */
    private stopDrawing;
    /**
     * Set the brush color
     * @param {string} newColor The new brush color
     * @returns {void}
     */
    setColor(newColor: string): void;
    /**
     * Set the brush width
     * @param {string} newColor The new brush width
     * @returns {void}
     */
    setLineWidth(newWidth: number): void;
    /**
     * Loads an image from a data URI, and resizes the canvas to the size of the image
     * @param {string} dataUri The data uri of the image to load
     * @returns {void}
     */
    loadBackgroundImageFromDataUri(dataUri: string): void;
    /**
     * Place an image on the canvas at a specified location, using a data URI as the source
     * @param {string} dataUri The data URI to load image data from
     * @param {ICoordinates} placement The coordinates to place the image at
     * @param {number} placement.x=0 The X coordinate to place the image at
     * @param {number} placement.y=0 The Y coordinate to place the image at
     * @returns {void}
     */
    loadImageFromDataUri(dataUri: string, placement?: ICoordinates): void;
    /**
     * Export the current drawing to a data URI
     * @returns {string} The exported data URI
     */
    toDataUri(): string;
    /**
     * Draws on the canvas, called on a mouse event.
     * @param {MouseEvent} e A mouse event to attach to
     * @returns {void}
     * @ignore
     */
    private draw;
    /**
     * Sets the default canvas values from the editor's configured values.
     * @returns {void}
     * @ignore
     */
    private setDefaults;
}
export default Editor;
