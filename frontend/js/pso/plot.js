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

    const frame0 = Array.from(frames[0]);
        // the frames are somehow not received as array ..


    const points = {
        type: "scatter",
        mode: "markers",
        x : frame0.map(p => p.x),
        y: frame0.map(p => p.y),
        marker: {color: "red"}
    };

    const vx = [];
    const vy = [];

    frame0.forEach(p => {
        vx.push(p.x, p.x + p.speed_x, null); // add null such that each line individual
        vy.push(p.y, p.y + p.speed_y, null);
    });

    const velocities = {
        type: "scatter",
        mode: "lines",
        x: vx,
        y: vy,
        line: { color: "blue", width: 1 },
        showlegend: false
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

    Plotly.newPlot("plot", [contour, points, velocities, searchRectanglePlot], {
        xaxis: {
            range: [plotRange["x"][0], plotRange["x"][1]],
            constrain: "domain"
            // removes achsis outside plot
        },
        yaxis: {
            range: [plotRange["y"][0], plotRange["y"][1]],
            scaleanchor: "x",
            constrain: "domain"
        }
    },
    {
        responsive: true
        // adopting container size!
        // now holding div can change plot size
    }

);

}
