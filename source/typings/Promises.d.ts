interface Thenable<R> {
	then<U>(onFulfilled?: (value: R) => U | Thenable<U>,  onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
}

declare class Promise<R> implements Thenable<R> {
	/**
	 * If you call resolve in the body of the callback passed to the constructor,
	 * your promise is fulfilled with result object passed to resolve.
	 * If you call reject your promise is rejected with the object passed to resolve.
	 * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
	 * Any errors thrown in the constructor callback will be implicitly passed to reject().
	 */
	constructor(callback: (resolve : (value?: R | Thenable<R>) => void, reject: (error?: Error) => void) => void);

	/**
	 * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
	 * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
	 * Both callbacks have a single parameter , the fulfillment value or rejection reason.
	 * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
	 * If an error is thrown in the callback, the returned promise rejects with that error.
	 *
	 * @param onFulfilled called when/if "promise" resolves
	 * @param onRejected called when/if "promise" rejects
	 */
	then<U>(onFulfilled?: (value: R) => U | Thenable<U>,  onRejected?: (error: Error) => U | Thenable<U>): Promise<U>;

	/**
	 * Sugar for promise.then(undefined, onRejected)
	 *
	 * @param onRejected called when/if "promise" rejects
	 */
	catch<U>(onRejected?: (error: Error) => U | Thenable<U>): Promise<U>;
}

interface JQueryPromiseCallback<T> {
	(value?: T, ...args: any[]): void;
}

interface JQueryPromise<T> {
	done(doneCallback?: JQueryPromiseCallback<T>): JQueryPromise<T>;
	fail(failCallback?: JQueryPromiseCallback<any>): JQueryPromise<any>;
}
