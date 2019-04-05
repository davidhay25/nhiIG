

<br/>
## Address change

This operation allows a patients address to be changed by an authorized user. 

The operation is invoked against an instance of a Patient and takes in a single parameter which is a FHIR [Address](http://hl7.org/fhir/datatypes.html#Address) data type.

There is no return value - in the event of a failure, a 4xx status will be returned, along with an [OperationOutcome](http://hl7.org/fhir/operationoutcome.html) resource that may provide further details about the failure.

If the user is not authorized to make the update, then a 403 status will be returned.

### Example

POST [host]/Patient/1234/$addressUpdate

(with the body as an Address object)

```
{
      "use": "home",
      "type": "both",
      "text": "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
      "line": [
        "534 Erewhon St"
      ],
      "city": "PleasantVille",
      "district": "Rainbow",
      "state": "Vic",
      "postalCode": "3999",
      "period": {
        "start": "1974-12-25"
      }
    }
```

### Questions for the design team

* What elements within the address datatype are supported 
