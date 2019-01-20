import { IEditorOptions } from './api';

class Editor {
	private canvas: HTMLCanvasElement;
	private c: CanvasRenderingContext2D;
	private isDrawing: boolean = false;
    private lastX: number;
    private lastY: number;
    private div: any;

	constructor(options: IEditorOptions) {
        if (options.renderDiv instanceof HTMLElement) this.div = options.renderDiv;
        else this.div = document.getElementById(options.renderDiv);

		this.canvas = <HTMLCanvasElement> document.createElement('canvas');
		this.c = this.canvas.getContext('2d');

        this.canvas.style.width = '100%';
        this.canvas.style.height = 'auto';

        this.div.height = window.innerHeight;
        this.div.width = window.innerWidth;

        this.c.lineJoin = 'round';
        this.c.lineCap = 'round';
        this.c.lineWidth = options.defaults.width || 7;
        this.c.strokeStyle = options.defaults.color || '#000000';

        this.initEvents();

        this.div.appendChild(this.canvas);
	}

    initEvents() {
        this.canvas.addEventListener('mousedown', (e) => {
            this.isDrawing = true;
            [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
        });

        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('mouseup', () => this.isDrawing = false);
        this.canvas.addEventListener('mouseout', () => this.isDrawing = false);

        window.addEventListener('resize', () => {
            this.div.height = window.innerHeight;
            this.div.width = window.innerWidth;
        });
    }

	setColor(newColor: string): void {
		this.c.strokeStyle = newColor;
	}

    setLineWidth(newWidth: number): void {
        this.c.lineWidth = newWidth;
    }

	loadImageFromDataUri(dataUri: string): void {
		const img = new Image;

		img.onload = () => {
			const imgHalfWidth: number = img.width / 2;
			const imgHalfHeight: number = img.height / 2;

			const canvasHalfWidth: number = this.canvas.width / 2;
			const canvasHalfHeight: number = this.canvas.height / 2;

			this.c.drawImage(img, canvasHalfWidth - imgHalfWidth, canvasHalfHeight - imgHalfHeight);
		};

		img.src = dataUri;
    }

    toDataUri() {
        return this.canvas.toDataURL();
    }

    draw(e) {
        // stop the function if they are not mouse down
        if(!this.isDrawing) return;

        this.c.beginPath();
        this.c.moveTo(this.lastX, this.lastY);
        this.c.lineTo(e.offsetX, e.offsetY);
        this.c.stroke();
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    }
}

export default Editor;
