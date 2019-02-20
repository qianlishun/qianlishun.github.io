
var jsonComm = {
    
}

function ReportInfo(){
    this.id = '检查号';
    this.organization = '组织名';
    this.patient = new Patient();
    this.logo = 'logo 图片';
    this.applyDoc = '申请医师';
    this.diagDoc = '诊断医师';
    this.date = '诊断时间';
    this.obs = '所见';
    this.tips = '提示';
    this.indexList = [];
}

function Patient(){
    this.name = '姓名';
    this.gender = '性别';
    this.age = '年龄';
}

jsonComm.makeJSONWith = function(func,params){
    var jsonObj = new Object();
    
    jsonObj.Function = func;
    
    jsonObj.Param = params;
    
    return JSON.stringify(jsonObj);
};


jsonComm.loadJSONCallFunc = function(jsonStr){
    var json = JSON.parse(jsonStr);
    var count = Object.keys(json).length;
    if(count){
        var funcName = json.Function;
        var func = eval(funcName);
        if(count==2){
            var param = json.Param;
            func(param);
        }else if(count==3){
            var param1 = json.Param1;
            var param2 = json.Param2;
            func(param1,param2);
        }else{
            func();
        }
    }
}

