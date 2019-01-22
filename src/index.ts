import { IEditorOptions } from './api';

class Editor {
	private canvas: HTMLCanvasElement;
	private c: CanvasRenderingContext2D;
	private isDrawing: boolean = false;
    private lastX: number;
    private lastY: number;
    private defaultLineWidth: number;
    private defaultColor: string;

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

        this.initEvents();
        this.setDefaults();
	}

    private initEvents(): void {
        this.canvas.addEventListener('mousedown', e => {
            this.isDrawing = true;
            [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
        });

        this.canvas.addEventListener('mousemove', this.draw);
        this.canvas.addEventListener('mouseup', () => this.isDrawing = false);
        this.canvas.addEventListener('mouseout', () => this.isDrawing = false);
    }

	public setColor(newColor: string): void {
		this.c.strokeStyle = newColor;
	}

    public setLineWidth(newWidth: number): void {
        this.c.lineWidth = newWidth;
    }

	public loadImageFromDataUri(dataUri: string): void {
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

    public toDataUri(): string {
        return this.canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    }

    private draw(e): void {
        if(!this.isDrawing) return;

        this.c.beginPath();
        this.c.moveTo(this.lastX, this.lastY);
        this.c.lineTo(e.offsetX, e.offsetY);
        this.c.stroke();
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    }

    private setDefaults() {
        this.c.lineJoin = 'round';
        this.c.lineCap = 'round';
        this.c.lineWidth = this.defaultLineWidth || 8;
        this.c.strokeStyle = this.defaultColor || '#000000';
    }
}

export default Editor;
