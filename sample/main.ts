export function configure(aurelia: any) {
	aurelia.use.standardConfiguration();
	aurelia.globalizeResources('output/progress-modal')
	aurelia.start().then((a: any) => a.setRoot('output-sample/app', document.body));
}
