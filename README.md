- `npm install`
- Add `console.log(watchOptions, watchOptions.stdin)` before
```
if (watchOptions.stdin) {
	process.stdin.on("end", function (_) {
		process.exit(); // eslint-disable-line
	});
	process.stdin.resume();
}
```
in `node_modules/webpack-cli/bin/cli.js:353`.
- `npm run watch`
- See `{ stdin: true } true` be logged for a single config, while both configs yield `true undefined`.