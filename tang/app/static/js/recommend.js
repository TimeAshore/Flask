/**
 * Created by Administrator on 2017/4/15.
 */
function empty() {
    document.getElementById("keyword").value="";
}
function recuse() {
    document.getElementById("keyword").value="请输入关键字";
}
function getCity() {
    var type = $('#type option:selected').val();//选中的值
    $.ajax({
        url: '/recommend/select',
        type: 'GET',     // 请求类型，常用的有 GET 和 POST
        data: {
            'type': type
        },
        success: function (data) {
                $("#one option:not(:first)").remove();
                for(var i = 0; i< data.length; i++){
                    $("<option value='"+data[i]+"'>"+data[i]+"</option>").appendTo("#one");
                }
        }
    });
}
function getData(){
    recuse();
    var type = $('#type option:selected').val();
    var one = $('#one option:selected').val();
    var key = $("#keyword").val();
    if(key=="请输入关键字"||key=="")
    {
        key="empty";
    }
    $.ajax({
        url: '/recommend/detail',
        type: 'POST',
        data: {
            'type':type,
            'one':one,
            'key':key
        },// 请求类型，常用的有 GET 和 POST
        success: function(data){
                if(data.length<=0)
                {
                    $("#detail  tr:not(:first)").remove();
                    $("#empty").show();
                    $("#empty").html("检索不到相关数据，请更换条件重新检索")
                }
                else {
                    $("#empty").hide();
                    $("#detail  tr:not(:first)").remove();
                    for(var i=0;i<data.length;i++){
                        var $trDetail = $("<tr></tr>");
                        $trDetail.append("<td>"+data[i][0]+"</td>");
                        $trDetail.append("<td>"+data[i][1]+"</td>");
                        $trDetail.append("<td>"+data[i][2]+"</td>");
                        $trDetail.append("<td>"+data[i][3]+"</td>");
                        $trDetail.append("<td>"+"<a href="+data[i][4]+">"+'查看详情'+"</a></td>");
                        $trDetail.appendTo("#detail");
                    }
                    $("td>a").attr("target","_blank");
                }
        }
        }
    );

}

