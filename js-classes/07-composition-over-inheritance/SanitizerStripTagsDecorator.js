import cheerio from 'cheerio';

const stripTags = (tagString) => {
  // BEGIN (write your solution here)
  return cheerio.load(tagString).text();
  // END
};

// BEGIN (write your solution here)
class SanitizerStripTagsDecorator {
  constructor (baseSanitizer) {
    this.baseSanitizer = baseSanitizer;
  }
  
  sanitize (text) {
    const stripped = stripTags (text);
    return this.baseSanitizer.sanitize(stripped);
  }
}
// END
export default SanitizerStripTagsDecorator;
