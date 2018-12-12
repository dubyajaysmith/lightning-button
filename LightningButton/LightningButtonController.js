// jshint esversion: 6, asi: true
({
	init : function(c, e, h) {
        
		const id = c.get("v.recordId")
		const url = `${window.location.origin}/apex/ProfileSummary?id=${id}`
		window.open(url, '_blank') //=> need new tab


		// const url = `\/\/jamiesmiths.com?id=${id}`	//=> to nav to another URL
		
        //const action = $A.get("e.force:navigateToURL") //=> need same tab with lightning header
        //action.setParams({
		//	url,
		//	"target": "_blank"
        //})
		//action.fire()
	},
	onRender: function(c, e, h){
        
    	const bye = $A.get("e.force:closeQuickAction")
        bye.fire()
        console.log('bye')
    }
})