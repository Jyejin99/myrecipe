function check(){
    var memberId = document.getElementById("email");
    var membernick = document.getElementById("nickname");
    var memberpw = document.getElementById("pw");
    var pwconfirm = document.getElementById("pw-confirm");
    var membertel = document.getElementById("tel");

    if(!memberId.value){
        alert("아이디를 입력하세요.");
        memberId.focus();
        return false;
    }else if(!membernick.value){
        alert("닉네임을 입력하세요.");
        membernick.focus();
        return false;
    }else if(!memberpw.value){
        alert("비밀번호를 입력하세요.");
        memberpw.focus();
        return false;
    }else if(!pwconfirm.value){
        alert("비밀번호 확인을 입력하세요.");
        pwconfirm.focus();
        return false;
    }else if(!membertel.value){
        alert("전화번호를 입력하세요.");
        membertel.focus();
        return false;
    }
}

function login(){
    var memberId = document.getElementById("email");
    var memberpw = document.getElementById("pw");

    if(!memberId.value){
        alert("아이디를 입력하세요.");
        memberId.focus();
        return false;
    }else if(!memberpw.value){
        alert("비밀번호를 입력하세요.");
        memberpw.focus();
        return false;
    }
}

function checkpw(){
    var pw = document.getElementById("pw");
    var pwconfirm = document.getElementById("pw-confirm");

    if(pw.value==pwconfirm.value){
        document.getElementById("check").innerHTML="비밀번호가 일치합니다.";
        document.getElementById('check').style.color = 'blue';
        document.getElementById('check').style.fontSize = '0.8rem';
    }else{
        document.getElementById("check").innerHTML="비밀번호가 일치하지않습니다.";
        document.getElementById('check').style.color = 'red';
        document.getElementById('check').style.fontSize = '0.8rem';
    }
}