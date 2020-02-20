const zb = require('zeebe-node')

;(async () => {
	const zbc = new zb.ZBClient('127.0.0.1:26500')
	const topology = await zbc.topology()
	console.log(JSON.stringify(topology, null, 2))

	

	const zbWorker = zbc.createWorker('ImageInspection', 'ImageInspection', handler)
	setTimeout(() => {
		console.log('Closing client...')
		zbc.close().then(() => console.log('All workers closed'))
	}, 1000000)
})()

function handler(payload, complete) {
	console.log('ZB payload', payload)
	complete.success(payload.variables,{ newvar:'bob'})
}