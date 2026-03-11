import { connectSlider} from "../controls.js";
import { getParameters } from "./controls.js"
import { sendOptimizerRequest } from "./api.js";
import { initialPlot } from "./plot.js";
import { handle_errors } from "../error_handler.js";

let currentRun = 0;
// variable to keep track of current run 
// -> prevents multiple parallel runs



document.getElementById("runButton").addEventListener("click", run);

connectSlider();

async function run() {

    const runId = ++currentRun;

    const params = getParameters();
    const data = await sendOptimizerRequest(params);

    handle_errors(data);



    if ("error_messages" in data) {
        return;
    }

    initialPlot(data);

    const frames = data.frames;

    const frames_per_second = parseFloat(document.querySelector('input[name="speed"]').value);
    const ms_between_frames = 1 / frames_per_second * 1000;

    for (let frame of frames) {


        if (runId !== currentRun) {
            return;
        }

        const x = [frame["x"]]
        const y = [frame["y"]]

        await Plotly.restyle("plot", {
            x: [x],
            y: [y]
        }, [1]);


        await Plotly.relayout("plot", {
            "annotations[0].text": "T = " + frame.tmp.toFixed(3)
        });


        // frame.x is the list of (4) x-values for simplex vertices by definition

        // this means: update trace index 1 !

        await new Promise(r => setTimeout(r, ms_between_frames));
        
    }
}