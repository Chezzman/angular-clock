function TimeController($interval) {
  var controller = this;

  var tick = () => {
    controller.clock = Date.now();
  };

  $interval(tick, 1000);
}

// TimeController.$inject = ['$interval'];

angular
  .module('aClock')
  .controller('TimeController', TimeController);
