export async function initialPlot(data) {

    const grid = data.grid;
    const frames = data.frames;
    const plotRange = data.plot_range;
    const searchRectangle = data.search_rectangle;

    const ncontours = parseInt(document.querySelector('input[name="levels"]').value);

    const contour = {
        type: "contour",
        x: grid.x,
        y: grid.y,
        z: grid.z,
        colorscale: "Blues",
        ncontours: ncontours
    };


    const points = {
        type: "scatter",
        mode: "markers",
        x : [frames[0]["x"]],
        y: [frames[0]["y"]],
        marker: {color: "red"}
    };


  
    const searchRectanglePlot = {
        type: "scatter",
        mode: "lines+markers+text",
        textposition: "top center",
        x: searchRectangle.map(point => point[0]),
        y: searchRectangle.map(point => point[1]),
        text: ["", "", "Search space", "", ""],
        line: {color: "black"}
    }

    Plotly.newPlot("plot", [contour, points, searchRectanglePlot], {
        xaxis: {
            range: [plotRange["x"][0], plotRange["x"][1]],
            constrain: "domain"
            // removes achsis outside plot
        },
        yaxis: {
            range: [plotRange["y"][0], plotRange["y"][1]],
            scaleanchor: "x",
            constrain: "domain"
        },
        annotations: [
            {
                text: "T = " + frames[0].tmp.toFixed(3),
                x: 0.02,
                y: 0.98,
                xref: "paper",
                yref: "paper",
                showarrow: false,
                font: { size: 16 },
                bgcolor: "rgba(255,255,255,0.7)"
            }
        ]
    },
    {
        responsive: true
        // adopting container size!
        // now holding div can change plot size
    }

);

}
