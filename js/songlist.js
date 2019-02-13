$("#submit").click(function(){
	// var param = $("#param").val();
    // var url = $("#url").val();
    var param = $("#param").val();
    var url = "https://api.hibai.cn/api/index/index"
	if(!param){
		alert('提交参数未填写');
	}else{
		$.ajax({
            type: "POST",
            url: url,
            dataType: 'json',
            data: JSON.parse(param),
            success: function(result){
				$("#result").val(JSON.stringify(result));
                return false;
            },
            error: function(request) {
                alert("Connection error");
                return false;
            }
        });
	}
});
// import 'aplayer/dist/APlayer.min.css';
// import APlayer from 'https://cdn.bootcss.com/aplayer/1.6.0/APlayer.min.js';
var music = new Array();
$.ajax({
    type: "POST",
    url: "https://api.hibai.cn/api/index/index",
    dataType: 'json',
    data: {"TransCode":"020112","OpenId":"123456789","Body":{"SongListId":"2665859025"}},
    success: function(result){
        var ap = new APlayer({
            container: document.getElementById("aplayer9"),
            fixed: true,
            autoplay: true,
            preload: "metadata",
            music: result.Body            
        });
    }
});
