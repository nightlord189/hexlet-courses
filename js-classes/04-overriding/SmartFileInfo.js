import FileInfo from './FileInfo.js';

// BEGIN (write your solution here)
class SmartFileInfo extends FileInfo{
  getSize (unit='b') {
    switch (unit) {
      case 'b':
        return super.getSize();
      case 'kb':
        return super.getSize()/1024;
      default:
        throw new Error (`unknown unit ${unit}`);
    }
  }
}
// END
export default SmartFileInfo;
