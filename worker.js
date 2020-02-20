//https://zeebe.joshwulf.com/quickstart/quickstart/
const { ZBClient } = require('zeebe-node')

function main() {

    const zbc = new ZBClient({
        onReady: () => console.log(`Connected!`),
        onConnectionError: () => console.log(`Disconnected!`)
    })


    zbc.createWorker("ImageInspectionWorker", "ImageInspection", (job, complete) => {
        console.log(job.variables);
        CompleteImageInspectionWorker(complete);
    })

    zbc.createWorker("VideoInspectionWorker", "VideoInspection", (job, complete) => {
        console.log(job.variables);
        CompleteVideoInspectionWorker(complete);
    })

    function CompleteImageInspectionWorker(complete) {
        complete.success({ outFrameLocation: 'up your ass', });
    }

    function CompleteVideoInspectionWorker(complete) {
        complete.success({ baseOutputImageLocation: 'C:/bob', videoFrames: ['c:/frame1', 'c:/frame2'] });
    }


};
main();