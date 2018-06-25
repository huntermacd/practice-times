var app = new Vue({
  el: '#app',
  data: {
    warmUpInput: 0,
    repertoireInput: 0,
    scalesArpeggiosInput: 0,
    chordsCompingInput: 0,
    howMuchTimeInput: 0,
    warmUpOutput: 0,
    repertoireOutput: 0,
    scalesArpeggiosOutput: 0,
    chordsCompingOutput: 0,
    totalPercentage: 0,
    totalColorClass: ''
  },
  methods: {
    calculate: function() {
      this.warmUpOutput = this.percentageToMinutes(this.howMuchTimeInput, this.warmUpInput);
      this.repertoireOutput = this.percentageToMinutes(this.howMuchTimeInput, this.repertoireInput);
      this.scalesArpeggiosOutput = this.percentageToMinutes(this.howMuchTimeInput, this.scalesArpeggiosInput);
      this.chordsCompingOutput = this.percentageToMinutes(this.howMuchTimeInput, this.chordsCompingInput);
      this.total();
    },
    percentageToMinutes: function(total, percentage) {
      return total / (100 / percentage);
    },
    total: function() {
      var total = +this.warmUpInput + +this.repertoireInput + +this.scalesArpeggiosInput + +this.chordsCompingInput;

      if (total > 100) {
        this.totalColorClass = 'red';
      } else if (total == 100) {
        this.totalColorClass = 'green';
      } else {
        this.totalColorClass = '';
      }

      this.totalPercentage = total;
    }
  }
});
