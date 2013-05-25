Meteor.publish("peopleSearch", function(searchString) {
	if(!searchString)
		var pattern = {};
	else {
		var re = new RegExp(searchString, "i");
		var pattern = {$or: [{'lastName': re}, {'firstName': re}]};
	}
	var result = People.find(pattern, {sort: {lastName: 1, firstName: 1}});
	console.log(searchString + " with peopleSearch: " + result.count());
	return result;
});

Meteor.publish("otherPeopleFirstNameSearch", function(searchString) {
	if(!searchString)
		var pattern = {};
	else {
		var re = new RegExp(searchString, "i");
		var pattern = {'firstName': re};
	}
	var result = OtherPeople.find(pattern, {sort: {lastName: 1, firstName: 1}});
	console.log(searchString + " with otherPeopleFirstNameSearch: " + result.count());
	return result;
});

Meteor.publish("otherPeopleLastNameSearch", function(searchString) {
	if(!searchString)
		var pattern = {};
	else {
		var re = new RegExp(searchString, "i");
		var pattern = {'lastName': re};
	}
	var result = OtherPeople.find(pattern, {sort: {lastName: 1, firstName: 1}});
	console.log(searchString + " with otherPeopleLastNameSearch: " + result.count());
	return result;
});