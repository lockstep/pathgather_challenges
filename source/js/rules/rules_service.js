var app = ngModule('challenge.services');

app.service("Rules", function() {
  var _rules = {
    "1": { "message": "Roll again.", "points": 0 },
    "2": { "message": "Learned something new today!", "points": 1 },
    "3": { "message": "Family lunch day!", "points": 1 },
    "4": { "message": "Distracted by fundraising...", "points": -1 },
    "5": { "message": "Worked too many hours, fell asleep on subway...", "points": -2 }, "6": { "message": "New JS framework released, time to relearn everything...",
    "points": -1 },
    "7": { "message": "New JS framework released, time to relearn everything!",
    "points": 2 },
    "8": { "message": "Closed a new customer!", "points": 1 },
    "9": { "message": "Production is broken, oops...", "points": -1 },
    "10": { "message": "Roll again.", "points": 0 },
    "12": { "message": "New team member!", "points": 2 },
    "13": { "message": "Learned something new today!", "points": 1 },
    "14": { "message": "Need to get through all my emails...", "points": -1 }, "15": { "message": "Landed that open source PR!", "points": 2 },
    "16": { "message": "Awesome thank you email from a user!", "points": 1 }
  }

  var _service = {
    get: function(number) {
      return _rules["" + number];
    },
    message: function(number) {
      return this.get(number).message;
    }
  }

  return _service;
});
