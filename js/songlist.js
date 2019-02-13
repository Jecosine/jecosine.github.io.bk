$("#submit").click(function(){
	// var param = $("#param").val();
    // var url = $("#url").val();
    var param = '{"TransCode":"020112","OpenId":"Test","Body":{"SongListId":"141998290"}}';
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
