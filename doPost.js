async function doPost() {
    const email = 'naka4o.hd@gmail.com';
    const name = '中塩';
    const grad = 'S60';
    const 会 = '小泉会';

    const attend = '参加';
    let number = '';
    if(attend!=='参加') number = '';
    let message = '';
    document.getElementById("output").innerHTML=`    
<h3>データ送信中.. 数秒お待ちください ..</h3>
`;

    const formData={
      attend ,
      number ,
      message,
      email, name , grad, 会,
    };
    console.log(formData);
    const URL='https://script.google.com/macros/s/AKfycbzLVksrx6uWaQsKNWyTV_as3vBmJ3FhisoGJCUv7bL_LpFPYZZyQOm02rbVMlaV173A9g/exec';
try {
    const res = await fetch(getPostURL(), {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    const d = await res.json();
    document.getElementById('output').innerHTML =`
<h3>ご回答、ありがとうございました。</h3>
    `; 
} catch (error) {
        console.error('エラーが発生しました:', error);
        document.getElementById('output').innerHTML = `
<strong>      
エラーが発生しました。
${error}
</strong>
`;
}
  }
