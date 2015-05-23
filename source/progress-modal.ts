import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import './progress-modal.css!';

import { customElement, useView, bindable, inject } from 'aurelia-framework';
import jquery from 'jquery';
import uuid from 'uuid';

@customElement('progress-modal')
@useView('./progress-modal.html')
export class ProgressModal {
	@bindable
	public title: string;
	protected uuid: string = uuid();

	protected bind(bindingContext: any) {
		if (!this.title)
			throw new Error("Must provide title to progress-modal!");
	}

	public show(promise: Promise<any>) {
		if (!promise)
			throw new Error('A promise is required to show the progress modal.');

		jquery(`#${this.uuid}`).modal('show');
		promise.then(_ => this.hide(), _ => this.hide());
	}

	public hide() {
		jquery(`#${this.uuid}`).modal('hide');
	}
}
