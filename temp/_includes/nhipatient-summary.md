Key changes from the core Patient resource:

* There is a specific identifier defined for the NHI. This has the system value: https://standards.digital.health.nz/id/nhi . The identifier is sliced.
* There is an extension to represent the patients ethnicity. This is a coded element drawn from the Level 4 ethnicity codes
* There is an extension for birth place, which includes the place, and the data source
* Birth Date has an extension for information source
* Gender has an extension for trans-gender values that are not part of the FHIR ValueSet. These need to be represented as extensions on the closest value in the set.