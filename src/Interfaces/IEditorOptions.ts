import IEditorControlsOptions from './IEditorControlsOptions';

/**
 * Options to bootstrap the editor with upon creation. A kitchen sink example:
 * <script src="https://gist.github.com/RailRunner166/205488af87983bd3865ef4f71897b7af.js"></script>
 */
interface IEditorOptions {
    canvas: string | HTMLCanvasElement
	controls?: string | HTMLElement
	controlsOptions?: IEditorControlsOptions
}

export default IEditorOptions;