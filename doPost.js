<script>
async function writeData() {
    const attendSelector = document.querySelector('input[name="attend"]:checked');
    if(!attendSelector) {
      const dialog=document.getElementById('dialog');
      if(dialog) dialog.innerHTML=`
参加不参加を選択してください。<br>
<button onclick="document.querySelector('dialog').close()">
閉じる
  </button>
  `;
    	dialog.showModal();
      return;
    }
    const form = document.getElementById("dataForm");
    //if(form)form.style.display='none';

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const grad = document.getElementById('grad').value;
    const 会 = document.getElementById('会').value;


    const attend = attendSelector.value;
    let number = document.getElementById('number').value;
    if(attend!=='参加') number = '';
    let message = document.getElementById('message').value;
    disableAllFormElements('dataForm');
    message = addKey(message,"write");
    document.getElementById("timeLimit").innerHTML=`    
<h3>データ送信中.. 数秒お待ちください ..</h3>
`;

    const formData={
      attend ,
      number ,
      message,
      email, name , grad, 会,
    };
    console.log(formData)
    // POST_URL = '<deployURL>';
try {
    const res = await fetch(getPostURL(), {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    const d = await res.json();
    if(!d.number)d.number='';
    if(!d.message)d.message='';
    form.style.display="block";
    form.innerHTML =`
<h3>ご回答、ありがとうございました。</h3>
    `; 
    document.getElementById("timeLimit").innerHTML="";
} catch (error) {
        console.error('エラーが発生しました:', error);
        document.getElementById('dialog').innerHTML = `
<strong>      
エラーが発生しました。
${error}
</strong>
`;
}
  }
</script>
