if (Meteor.isClient) {

  Template.hello.helpers({
    paste: function() {
      return paste.find({
        _id: "textarea"
      });
    }
  });

  Template.hello.events({
    'change #textarea': function() {
      var content = document.getElementById('textarea').value;
      paste.upsert({
        _id: "textarea",
      }, {
        $set: {
          text: content
        }
      });
    }
  });
}

paste = new Mongo.Collection("paste");

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}