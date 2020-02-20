/* --create client and deploy workflow

const { ZBClient } = require('zeebe-node')

const zbc = new ZBClient()

async function main() {
  try {
    const res = await zbc.deployWorkflow('./workflow/yolotest.bpmn')
    console.log(JSON.stringify(res, null, 2))
  } catch (e) {
    console.error(e)
  }
}

main()
*/

 //--create client and deploy workflow then create workflow instance

const { ZBClient } = require('zeebe-node')
const zbc = new ZBClient()

async function main() {
    try {
        await zbc.deployWorkflow('./workflow/yolotest.bpmn')

        let processId = 'Test_Yolo_workflow';

        const result = await zbc.createWorkflowInstanceWithResult({
            bpmnProcessId: processId,
            variables: {
                readimage: true,
                readvideo: "false"
                
            },
            requestTimeout: 1000000,
        })


        console.log(JSON.stringify(result, null, 2))
    } catch (e) {
        console.error(e)
    }
}

main()


