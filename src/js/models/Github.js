
class Github {
	constructor (opts) {
		this.API_HOST = 'https://api.github.com';
		this.OWNER = 'jefftherobot';
		this.REPO = 'jefftherobot.com';
		this.API_PREFIX = this.API_HOST + '/repos/' + this.OWNER + '/' + this.REPO + '/git';
		this.filesystem = {};
		this.stack = [];

		this.getTree();
	}

	getTree(){
		var _ = this;
		$.getJSON(_.API_PREFIX + '/refs/heads/filesystem', function(data, textStatus, jqXHR){
			var sha = data.object.sha;
			$.getJSON(_.API_PREFIX + '/trees/'+sha+'?recursive=1', function(data, textStatus, jqXHR){
				_.createFileStructure(data);
			})
		})
	}

	createFileStructure(data){
		var _ = this;

		for(let i in data.tree) {
			let item = data.tree[i];
			let paths = item.path.split('/');

			var fs = _.filesystem;
			paths.forEach(function (path, i) {

				if(!fs.hasOwnProperty(path)) {
					fs[path] = {};
				} else {
					fs = fs[path]
				}

				if (i == paths.length-1) {
					item.path = path;
					fs[path] = item;
				}
			});
		}
	}

	getCurrentPath(){
		if(this.stack.length == 0){
			return '~/';
		}
		return this.stack.join('/')
	}

	getCurrentWorkingDirectory(){
		var _ = this;
		if(_.stack.length == 0){
			return _.filesystem;
		}

		var fs = _.filesystem
		for(let i in _.stack) {
			fs = fs[_.stack[i]];
		}
		return fs;
	}
}

export default new Github();