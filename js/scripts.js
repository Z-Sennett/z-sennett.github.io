$(document).ready(function(){
    $('#date').datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3'
    
    });
});

var cap = {};
  cap['steve'] = 0;
  cap['sam'] = 0;
$(document).ready(function(){
  
  drawChart();
  
  $("#submit").click(function(){
      if($("#bettercap").val()=="steve"){
        cap['steve']++;
      }
      if($("#bettercap").val()=="sam"){
          cap['sam']++;
       }
    drawChart();
  });
  
  function drawChart(){
    var ctx = $('#myChart');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Steve Rogers', 'Sam Wilson'],
            datasets: [{
                label: '# of Votes',
                data: [cap['steve'], cap['sam']],
              backgroundColor:[
                'tan',
                'red'
              ]
            }]
            }
        });
  }
  });