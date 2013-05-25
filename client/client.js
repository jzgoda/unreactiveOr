Deps.autorun(function() {
	Meteor.subscribe("peopleSearch", Session.get("searchString"));
	Meteor.subscribe("otherPeopleFirstNameSearch", Session.get("searchString"));
	Meteor.subscribe("otherPeopleLastNameSearch", Session.get("searchString"));
});

Template.people.helpers({
	people: function() {
		var re = new RegExp(Session.get('searchString'), "i");
		return People.find(
			{$or: [{'lastName': re}, {'firstName': re}]}, 
			{sort: {lastName: 1, firstName: 1}}
		);
	},

	peopleCount: function() {
		var re = new RegExp(Session.get('searchString'), "i");
		return People.find(
			{$or: [{'lastName': re}, {'firstName': re}]}, 
			{sort: {lastName: 1, firstName: 1}}
		).count();
	}
});

Template.otherPeople.helpers({
	otherPeople: function() {
		var re = new RegExp(Session.get('searchString'), "i");
		return OtherPeople.find(
			{$or: [{'lastName': re}, {'firstName': re}]}, 
			{sort: {lastName: 1, firstName: 1}}
		);
	},

	otherPeopleCount: function() {
		var re = new RegExp(Session.get('searchString'), "i");
		return OtherPeople.find(
			{$or: [{'lastName': re}, {'firstName': re}]}, 
			{sort: {lastName: 1, firstName: 1}}
		).count();
	}
});

Template.search.events({
	'keypress #search': function(event) {
		if(event.keyCode === 13) {
			Session.set('searchString', $('#search').val());
		}
	}
});