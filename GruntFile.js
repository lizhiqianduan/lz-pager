/*
created by xiaohei on 2015/6/1
*/
module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({



        watch:{
            js:{
                files:"./src/lz-pager.js",
                tasks:"uglify"
            }
        },
		
        uglify:{
            lzpager:{
                files: {
                    "src/lz-pager.min.js": ['src/lz-pager.js']
                }
            }
            
        }



    });




   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
	
   grunt.registerTask("minJs",["uglify:pagemin"]);

}