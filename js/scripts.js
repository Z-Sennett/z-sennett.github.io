//DatePicker
$(document).ready(function(){
    $('#date').datepicker({
        format: 'mm/dd/yyyy',
        startDate: '-3'
    
    });
});
//Captain America Poll
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

  $(document).ready(function(){
    $("#fox-button").click(function(){
      var fox = $.get("https://randomfox.ca/floof/");
      
  
      fox.done(function(response){       
        $("#fox").show();
        $("#fox-img").attr("src", response.image);
      });
    });
  });

$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();
   var webform= $.post("https://maker.ifttt.com/trigger/webform/with/key/d4sTtejyyd2zB_AcoSn4ON", JSON.stringify({"value1": $("#name").val, "value2": $("#email").val(), "value3": $("#message").val()}));
     });
})