export interface IEditorOptions {
    canvasId: string
    defaults?: {
        color?: string
        lineWidth?: number
        height?: number
        width?: number
    }
};

export interface ICoordinates {
	x: number
	y: number
};