# metalsmith-file-info-logger

> A metalsmith plugin for logging the attributes of a file

[![stack overflow][stackoverflow-badge]][stackoverflow-url]
[![slack chat][slack-badge]][slack-url]

For support questions please use [stack overflow][stackoverflow-url] or our [slack channel][slack-url]. For templating engine specific questions try the aforementioned channels, as well as the documentation for [consolidate.js](https://github.com/tj/consolidate.js) and your templating engine of choice.

## Installation

```bash
$ npm install metalsmith-layouts
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
