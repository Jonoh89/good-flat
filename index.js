const Stream = require('stream');
const flatten = require('flat');

class Flatten extends Stream.Transform {

  constructor(opts, flatOpts) {
    const options = Object.assign({}, opts, { objectMode: true });
    super(options);
    this.flatOpts = flatOpts;
  }

  _transform(data, enc, next) {
    next(null, flatten(data, this.flatOpts));
  }
}

module.exports = {
  Flatten: Flatten
};
