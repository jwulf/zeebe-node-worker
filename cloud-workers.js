module.exports = {
  tasks: {
  "ImageInspection": (job, complete) => {
        console.log(job.variables);
        CompleteImageInspectionWorker(complete);
    },

    "VideoInspection": (job, complete) => {
        console.log(job.variables);
        CompleteVideoInspectionWorker(complete);
    }
  }
}

function CompleteImageInspectionWorker(complete) {
    complete.success({ outFrameLocation: 'up your ass' });
}

function CompleteVideoInspectionWorker(complete) {
    complete.success({ baseOutputImageLocation: 'C:/bob', videoFrames: ['c:/frame1', 'c:/frame2'] });
}


