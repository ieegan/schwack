var app = new Vue({
	el: '#app',
	data: {
		json: null,
		nav: false,
		active: '',
		location: ''
	},
	methods: {
		checkPage: function(route){
			if(route == this.active)
				return true
			return false
		}
	},
	mounted: function(){
		self = this
		axios.get('/data.json')
		.then(function (response) {
			self.json = response.data
			self.active = self.json.default.route
		})
		.catch(function (error) {
			console.log(error)
		});
	}
})