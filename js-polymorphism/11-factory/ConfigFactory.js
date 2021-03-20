// @ts-check

import path from 'path';
import fs from 'fs';
import JsonParser from './parsers/JsonParser.js';
import YamlParser from './parsers/YamlParser.js';
import Config from './Config.js';

// BEGIN (write your solution here)
export default class ConfigFactory {
  static getParser (extName) {
     switch (extName) {
      case 'json':
        return JsonParser;
       case 'yml':
       case 'yaml':
         return YamlParser;
       default:
         throw new Error (`unknown extensions ${extName}`);
    }   
  }
  
  static factory (filePath) {
    const readData = fs.readFileSync(filePath);
    const extName = path.extname(filePath).replace('.', '');
    const parseClass = ConfigFactory.getParser(extName);
    const parser = new parseClass();
    const parsedData = parser.parse(readData);
    return new Config (parsedData);
  }
}
// END
