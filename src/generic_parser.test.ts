import * as fs from 'fs';
import { GenericParser } from './generic_parser';
test('Parse a SOAP XML with embedded JSON', async () => {
  const xml = fs.readFileSync('./data/test_1.xml');
  const soapParser = new GenericParser<any>();
  const response = await soapParser.parse(xml);
  expect(response).toBeDefined();
});
