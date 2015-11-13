if (Meteor.isClient) {
  Template.hello.rendered = function() {
    var clipboard = new Clipboard('.btn');
  };

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
    },
    'click .btn-clear': function() {
      document.querySelector('#textarea').value = null;
    }
  });
}

paste = new Mongo.Collection("paste");

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}