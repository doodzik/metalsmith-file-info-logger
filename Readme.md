# metalsmith-file-info-logger

> A metalsmith plugin for logging the attributes of a file

[![stack overflow][stackoverflow-badge]][stackoverflow-url]
[![slack chat][slack-badge]][slack-url]

For support questions please use [stack overflow][stackoverflow-url] or our [slack channel][slack-url].

## Installation

```bash
$ npm install https://github.com/superwolff/metalsmith-file-info-logger
```

## Example

Configuration in `metalsmith.json`:

```javascript
var log = require('metalsmith-file-info-logger')
// ...
.use(log({
  pattern: '*.html',
  schema: {
    title: true,
    date: true
  }
}))
// ...
```

## Options

You can pass options to `metalsmith-file-info-logger` with the [Javascript API](https://github.com/segmentio/metalsmith#api) or [CLI](https://github.com/segmentio/metalsmith#cli). The options are:

* [pattern](#patter): describe a pattern (optionl)
* [schema](#schema): specify a schema of the file data to pass to the logger (optional)
* [logger](#logger): a function to use instead of console.log (optional)

### pattern

Only files that match the pattern are passed to the logger.
Defaults to all files
Uses [minimatch](https://github.com/isaacs/minimatch) for matching

### schema

Uses [deep_pick](https://github.com/mohsen1/deep_pick) for the schema.
Defaults to log the whole file info.

### logger

specify a logger function.
Defaults to ```console.log```

## License

LGPL

[slack-badge]: https://img.shields.io/badge/Slack-Join%20Chat%20→-blue.svg
[slack-url]: http://metalsmith-slack.herokuapp.com/
[stackoverflow-badge]: https://img.shields.io/badge/stack%20overflow-%23metalsmith-red.svg
[stackoverflow-url]: http://stackoverflow.com/questions/tagged/metalsmith
