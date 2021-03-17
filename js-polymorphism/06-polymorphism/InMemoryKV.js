// @ts-check

import fs from 'fs';
import _ from 'lodash';

class InMemoryKV {
  constructor(initial = {}) {
    this.data = _.cloneDeep(initial);
  }

  set(key, value) {
    this.data[key] = value;
  }

  unset(key) {
    delete this.data[key];
  }

  get(key, defaultValue = null) {
    return _.get(this.data, key, defaultValue);
  }

  toObject() {
    return _.cloneDeep(this.data);
  }
}

export default InMemoryKV;
