function TimeController($timeout) {
  var controller = this;
  controller.clock = 'loading clock...'; // initialise the time variable
  controller.tickInterval = 1000; //ms

  console.log(controller);

  var tick = function() {
    controller.clock = Date.now(); // get the current time
    $timeout(tick, controller.tickInterval); // reset the timer
    console.log(controller.clock);
    console.log(controller.tickInterval);
  };

    // Start the timer
  $timeout(tick, controller.tickInterval);
}

angular
  .module('aClock', [])
  .controller('TimeController', TimeController);
