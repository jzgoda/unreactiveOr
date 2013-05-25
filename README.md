Unreactive $or in Meteor
=========================

It seems that a collection doesn't get updated on the client when a publication uses an $or for it's query.
It does work for the first query, but subsequent queries, that include data not in the first result, are incomplete.

I also found a workaround, by using multiple publications/subscriptions that each only query a single field. Meteor does properly handle merging those results together.


The Example
------------

In this example, I've created two collections: 

* People - uses an $or query
* OtherPeople - uses multiple publications on a single field

These collections are filled with the same random fixture data, and then searching is intented to match on either a person's first or last name.

I've also set the server to console.out() the size of the result set...and as you will see, the count is always accurate on the server.
So the query works, and the server has the proper result set, but somehow, there's a breakdown with getting that information to the client.
