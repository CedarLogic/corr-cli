var dashboard = {
	content: document.getElementById("dashboard-content"),
	activity:function(session){
		dashboard.content.innerHTML = "<div class='container' id='dashboard-content'><div id='chart-dashboard'><div class='row'><div class='card'><div class='card-move-up waves-effect waves-block waves-light'><div class='move-up cyan darken-1'><div><span class='chart-title white-text'>Activity</span></div><div class='trending-line-chart-wrapper' id='trending-line-chart-wrapper'><div class='preloader-wrapper big active'><div class='spinner-layer spinner-blue-only'><div class='circle-clipper left'><div class='circle'></div></div></div></div></div></div></div><div class='card-content'><a class='btn-floating btn-move-up waves-effect waves-light darken-2 left'><i class='mdi-file-cloud-download  activator' onclick='space.exportToJson()'></i></a><div class='col s12 m3 l3'><div id='doughnut-chart-wrapper'><div class='preloader-wrapper big active'><div class='spinner-layer spinner-red-only'><div class='circle-clipper right'><div class='circle'></div></div></div></div></div></div><div class='col s12 m2 l2'><ul class='doughnut-chart-legend'></ul></div><div class='col s12 m5 l6'><div class='trending-bar-chart-wrapper' id='trending-bar-chart-wrapper'><div class='preloader-wrapper big active'><div class='spinner-layer spinner-yellow-only'><div class='circle-clipper right'><div class='circle'></div></div></div></div></div></div></div></div></div></div><div id='card-widgets'><div id='projects-list' class='row' data-distance='100'><div class='progress'><div class='indeterminate'></div></div></div><br/><div id='temporal-slider'></div></div></div>";
        user.session = session;
        console.log(user.session);
        user.trusted();

        var space = new Space(user.session);
        space.dashboard();
	},
	apps:function(session){
		dashboard.content.innerHTML = "<div class='center'><span class='chart-title red-text'>Not designed yet!</span><div>";
		user.session = session;
        console.log(user.session);
        user.trusted();
	},
	projects:function(session){
		dashboard.content.innerHTML = "<div id='card-widgets'><div id='projects-list' class='row' data-distance='100'><div class='progress'>  <div class='indeterminate'></div></div></div><br/><div id='temporal-slider'></div></div>";
		user.session = session;
        console.log(user.session);
        user.trusted();

        var space = new Space(user.session);
        space.dashboard();
	},
	records:function(session, options){
		dashboard.content.innerHTML = "<div id='card-widgets'><div id='records-list' class='row' data-distance='100'><div class='progress'>  <div class='indeterminate'></div></div></div><br/><div id='temporal-slider'></div></div>";
		user.session = session;
        console.log(user.session);
        user.trusted();
        var project = "all";
        for(var i=0;i<options.length;i++){
            var parts = options[i].split("=");
            if(parts[0] == "project"){
                project = parts[1];
            }
        }
        var space = new Space(user.session);
        space.records(project);
	},
	diffs:function(session, options){
		dashboard.content.innerHTML = "<div class='center'><span class='chart-title red-text'>Not designed yet!</span><div>";
		user.session = session;
        console.log(user.session);
        user.trusted();
	},
	query:function(session, options){
		dashboard.content.innerHTML = "<div class='center'><span class='chart-title red-text'>Not designed yet!</span><div>";
		user.session = session;
        console.log(user.session);
        user.trusted();
	}
}