TODO: list search parameters supported

For privacy reasons, there are a number of requirements for search. These include

* Search must include a DoB
* At least one of first name /last name must be included in a search

There is an on going discussion concerning the response of the API when a search includes a 'merged’ patient – ie where one patient NHI has been discontinued, and replaced by another (This commonly occurs when a single person has been allocated more than one NHI number. One is chosen as the active one, and the others become inactive.

The question is what should happen when a search would result in an inactive patient being returned?

* Should the resource be returned regardless, and it is the clients responsibility to check that it is active
* Should the active one be returned instead – which would mean that the response would not always match the search criteria (eg the names were different)

It may be that a more complex rule be made:

If the search is by NHI, then return regardless
Otherwise exclude inactive patients - return 'merged' patient
