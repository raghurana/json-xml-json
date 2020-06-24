# json-xml-json

This NPM package exposes a `GenericSoapParser` using `saxophone-ts` and `fast-json-parse` to convert a XML with JSON data.

## test.xml

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <soapenv:Header></soapenv:Header>
    <soapenv:Body>
        <ab>
            <id>123</id>
            <dataJson>
                {
                    "a": "x",
                    "b": "y",
                    "c": "z",
                }
            </dataJson>
        </ab>
    </soapenv:Body>
</soapenv:Envelope>
```
