// the reference is needed until TypeScript 1.6 when file mappings are added and something sane can be done with shared dependencies
/// <reference path="../source/typings/Promises.d.ts"/>

import { ProgressModal } from '../output/progress-modal';

export class App {
	private progressModal: ProgressModal;

	showModal = () => {
		var promise = new Promise<any>((resolve: (value: any) => void, reject: (error: Error) => void) => {
			setTimeout(() => resolve(null), 3000);
		});
		this.progressModal.show(promise);
	};
}
