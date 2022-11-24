// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

    // 1. Create the trace for the bubble chart.
    var bubbleData = [
   
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot(); 
  });
}

// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
  // Create a variable that holds the samples array. 
      var samples = data.samples;
  
  // Create a variable that filters the samples for the object with the desired sample number.
      var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
  
  // Create a variable that holds the first sample in the array.
      var result = resultArray[0];
  
  // Create variables that hold the otu_ids, otu_labels, and sample_values.
      var ids = result.otu_ids;
      var labels = result.otu_labels.slice(0, 10).reverse(); 
      var values = result.sample_values.slice(0,10).reverse();
  
      
  // Create the yticks for the bar chart.
  // Hint: Get the the top 10 otu_ids and map them in descending order  
  //  so the otu_ids with the most bacteria are last. 
  
      var yticks = ids.map(sampleObj => "OTU " + sampleObj).slice(0,10).reverse(); 
      console.log(yticks)
  
      // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
      //Plotly.newPlot(); 
  
      // 1. Create the trace for the bubble chart.
      var bubbleData = [{
        x: values,
        y: yticks,
        text: labels,
        mode: 'markers',
        marker: {
        size: [40, 60, 80, 100]
      } 
      }];
       
  
      // 2. Create the layout for the bubble chart.
      var bubbleLayout = {
        title: 'Marker Size',
        showlegend: false,
        height: 600,
        width: 600
        
      };
  
      // 3. Use Plotly to plot the data with the layout.
      Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
     
    });
  }
  
  