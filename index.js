d3.select('body')
  // .append('svg').attr('width', 400).attr('height', 400).attr('id', 'chart')

let sel = d3.select('#chart').append('g').attr('transform', 'translate(80, 30)')
let yScale = d3.scaleLinear()
    .domain([0, 1000])
    .range([1000, 0])




  // <svg id="chart" width=400 height=400>
d3.csv("./data.csv").then( (forage) => {
    console.log(forage)
    /* let xScale = d3.scaleBand()
        .domain(forage.map(d => d.kind)) // in coordinates of the data
        .range([10, 10 + forage.length*20]) // in pixels
        .round(true) */

    let legend = {'drink': '#333399', 'dishes': '#aa6633', 'food': '#aa6633'}
    // display a color legend (-> html?)
    /* sel.selectAll('text') // grabs the first two tick labels :(
       .data(['water', 'brush'])
       .text(d => d)
       .attr('x', 200)
       .attr('y', (d,i) => -40 - i*10)
       .style('fill', d => legend[d]) */


	sel.append('g')
      .selectAll('rect')
      .data(forage)
      .enter()
          .append('rect')
			.attr('x', 0)
			.attr('y', d => (d.id * 20)-5)
			.attr('width', 400)
			.attr('height', 2)
			.style('fill', 'blue')

    // the actual bar chart
    sel.append('g')
      .selectAll('rect')
      .data(forage)
      .enter()
          .append('rect')
          // .text('hello world')
          .attr('y', d => 10 + 20*d.id)
		  .attr('x', d => {
		  if(d.Drink == "TRUE"){
			  return 20;
		  }
		  if(d.Food == "TRUE"){
			  return 80
		  }
		  if(d.Dishes == "TRUE"){
			  return 145;
		  }
		  return 220;
		  })
          .attr('width', 15)
          .attr('height', 15)
          .style('fill', d => { return legend[d.want] })
		  
		  

	sel.append('g')
      .selectAll('text')
      .data(forage)
      .enter()
          .append('text')
			.attr('x', -40)
			.attr('y', d => d.id * 20)
			.text(d => d.Date)


})


sel.append('text')
   .attr('transform', 'translate(-60, 50) rotate(270)')
      .text('When I went')
      .style("text-anchor", "middle")
	  
sel.append('text')
   .attr('transform', 'translate(10,0) rotate(0)')
      .text('Drink-----Food-----Dishes-----Nothing')
      .style("text-anchor", "left")

  // <text x="10" y="10">hello world</text>

