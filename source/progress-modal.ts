import { customElement, useView, inject } from 'aurelia-framework';
import './progress-modal.css!';

@customElement('progress-modal')
@useView('./progress-modal.html')
export class ProgressModal {
	heading: string = "Hello world!";
}
