if (Meteor.isClient) {
  Template.hello.rendered = function() {
    var clipboard = new Clipboard('#btn-copy');
  };

  Template.hello.helpers({
    paste: function() {
      return paste.find({
        _id: "textarea"
      });
    }
  });

  Template.hello.events({
    'change #textarea': onChange,
    'click #btn-clear': function() {
      document.querySelector('#textarea').value = null;
      onChange();
    }
  });

  function onChange () {
      var content = document.getElementById('textarea').value;
      paste.upsert({
        _id: "textarea",
      }, {
        $set: {
          text: content
        }
      });
    }
}

paste = new Mongo.Collection("paste");

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}