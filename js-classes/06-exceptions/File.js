// BEGIN (write your solution here)
class File {
  constructor (filePath) {
    this.filePath = filePath;
  }
  
  read () {
    try {
      const data = fs.readFileSync(this.filePath, 
            {encoding:'utf8', flag:'r'}); 
      return data;
    }
    catch (e) {
      if (e.message.indexOf ('no such file') !== -1) {
        throw new NotExistsError (e.message);
      } else if (e.message.indexOf ('permission denied') !== -1) {
        throw new NotReadableError (e.message);
      }
      throw e;
    }
  }
}
// END
export default File;
