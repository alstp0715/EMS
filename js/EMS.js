//엑셀데이터 업로드
function upload(){
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function(){ 
      const fdata = reader.result;
      const read_buffer = XLSX.read(fdata, {type : 'binary'});
    read_buffer.SheetNames.forEach(function(sheetName){ 
      const rowdata =XLSX.utils.sheet_to_json(read_buffer.Sheets[sheetName]);
      const dataUpload = JSON.stringify(rowdata);
      const dis_upload = document.getElementById("file_upload");
      dis_upload.innerHTML = dataUpload.replace(/\"|:|\[{|\}]/g, ' ');
     }
    )
  };
    reader.readAsBinaryString(input.files[0]); 
  } 

  //로그인
  function onLogin(){
    const ID = document.getElementById("ID");
    const PW = document.getElementById("PW");
    if(ID.value=="asd" && PW.value=="asd"){
      alert("로그인 성공");
      location.href ="/practice/practice_total.html";
    }else{
      alert("로그인 실패");
    }
    ID.value = "";
    PW.value = "";
  } 


  const tablePageBtn = document.querySelector("#table_btn");
  const homePageBtn = document.querySelector("#home_btn");
  const HIDDEN_classname = 'hidden'; 
    function changePage(form){
            const hasTableclass = tablePageBtn.classList.contains(HIDDEN_classname);
            fetch(form).then(function(response){
            response.text().then(function(text){
              if(!hasTableclass){
                tablePageBtn.classList.add(HIDDEN_classname);
                homePageBtn.classList.remove(HIDDEN_classname);
                document.querySelector('#tableForm').innerHTML = text;
                  }else {
                    homePageBtn.classList.add(HIDDEN_classname);
                    tablePageBtn.classList.remove(HIDDEN_classname);
                    document.querySelector('#homeForm').innerHTML = text;
                  }return
                });
              });
  }
  // function homePage(name){
  //   fetch(name).then(function(response){
  //         response.text().then(function(text){
  //           tablePageBtn.classList.remove(HIDDEN_classname);
  //           homePageBtn.classList.add(HIDDEN_classname);
  //         document.querySelector('#home_form').innerHTML = text;
  //                 })
  //             });
  // }
const clock = document.querySelector("#clock");
const date_dis = document.querySelector('#date')

function sayHello(){
  const date = new Date();
  const year = String(date.getFullYear())
  const month = String(date.getMonth())
  const Ddate = String(date.getDate())
  // const day = String(date.getDay())
  const hours =String(date.getHours()).padStart(2,"0");
  const minutes =String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  let weekday = new Array(7);
  weekday[0] = "일요일";
  weekday[1] = "월요일";
  weekday[2] = "화요일";
  weekday[3] = "수요일";
  weekday[4] = "목요일";
  weekday[5] = "금요일";
  weekday[6] = "토요일";
  const d = weekday[date.getDay()];
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  date_dis.innerText =` ${year}-${month}-${Ddate} ${d}`
}
sayHello()
setInterval(sayHello,1000);