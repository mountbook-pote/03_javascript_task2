$(document).ready(function(){

  //変数一覧
  let prev_str = "";
  let str = "0";
  let input_str = "";
  let prev_value = 0; 
  let value = 0;
  let operator = "";
  let operator_str = "";

  //関数一覧
  function appendValue(){
    if(str === "0"){
      str = input_str;
    }
    else{
      if(str !== "-0"){
      str += input_str;
      }
    }
  }

  function appendPoint(){
    //第２項計算時に空になる。この時はじめに.がこないようにする
    if(str !== "" && str !== "-"){ 
      if(str === "0"){
        str = "0.";
      }
      else if(str.indexOf(".") === -1){
        str += input_str;
      }
    }
  }

  function appendZerozero(){
    //第２項計算時に空になる。この時はじめに00がこないようにする
    if(str !== "" && str !== "-" && str !== "-0"){ 
      if(str !== "0" && str.slice(-1) ){
        str += input_str;
      }
    }  
  }

  function displayCalc(){
    if(prev_str === ""){ //第１項入力時
      if(operator === ""){
        document.getElementById("result").textContent = str;
      }else{
        //operatorが初めて入力された時
        prev_str = str;
        document.getElementById("result").textContent = `${prev_str}${operator_str}`;
      }
    }else{
      //第２項の時の処理
      if(str === ""){ //第１項と第２項の間の演算子を切り替えられる状態
        document.getElementById("result").textContent = `${prev_str}${operator_str}`;
      }
      //strに数値と認識されるものが入っている時
      document.getElementById("result").textContent = `${prev_str}${operator_str}${str}`;
    }
  }

  function caluculateValue(){
    switch (operator){
      case "+":
        prev_value = (prev_value + value).toFixed(2);
        prev_str = String(prev_value);
        break;

      case "-":
        prev_value = (prev_value - value).toFixed(2);
        prev_str = String(prev_value);
        break;

      case "*":
        prev_value = (prev_value * value).toFixed(2);
        prev_str = String(prev_value);
        break;

      case "/":
          prev_value = (prev_value / value).toFixed(2);
          prev_str = String(prev_value);
          break;
    }
  }

  //各ボタン一覧
  $("#all-clear").click(function(){
    prev_str = "";
    str = "0";
    input_str = "";
    operator = "";
    operator_str ="";
    prev_value = 0; 
    value = 0;  
    displayCalc();
  });

  $("#equal").click(function(){
    //第１項に数値あり、その後ろに演算子あり、第２項に数値ありの時に行う
    if(operator !== "" && str !== ""){
      value = parseFloat(str);
      caluculateValue();
      //初期状態から第１項に文字列の数値が入り、演算子もまだ入力されてない状態にする。
      str = prev_str;
      document.getElementById("result").textContent = str;
      prev_str = "";
      prev_value = 0; 
      input_str = "";
      value = 0;
      operator = "";
      operator_str = "";
    }
  });

  $("#point").click(function(){
    input_str = ".";
    appendPoint();
    displayCalc();
  });

  $("#zero").click(function(){
    input_str = "0";
    appendValue();
    displayCalc();
  });

  $("#zerozero").click(function(){
    input_str = "00";
    appendZerozero();
    displayCalc();
  });

  $("#one").click(function(){
    input_str = "1";
    appendValue();
    displayCalc();
  });

  $("#two").click(function(){
    input_str = "2";
    appendValue();
    displayCalc();
  });

  $("#three").click(function(){
    input_str = "3";
    appendValue();
    displayCalc();
  });

  $("#four").click(function(){
    input_str = "4";
    appendValue();
    displayCalc();
  });

  $("#five").click(function(){
    input_str = "5";
    appendValue();
    displayCalc();
  });

  $("#six").click(function(){
    input_str = "6";
    appendValue();
    displayCalc();
  });

  $("#seven").click(function(){
    input_str = "7";
    appendValue();
    displayCalc();
  });

  $("#eight").click(function(){
    input_str = "8";
    appendValue();
    displayCalc();
  });

  $("#nine").click(function(){
    input_str = "9";
    appendValue();
    displayCalc();
  });

  $("#plus").click(function(){
    if(str !== "-" && str.slice(-1) !== "."){ //ちゃんとした数値になるものがstrに入ってる場合
      if(operator === ""){ //第１項目の後ろに付く四則演算の場合
        prev_str = str;
        prev_value = parseFloat(str);
        operator = "+";
        operator_str = "+";
        str = "";
        displayCalc();
      }
    }
    //以下、第２項目の後ろに付く四則演算の場合
    if(operator !== "" && str === ""){ //この時、第１と第２の間の四則演算は自由に切替る
      operator = "+";
      operator_str = "+";
      displayCalc();
    }else{ //第2項に数値と認識される文字列が入っている場合
      if(str !== "-" && str.slice(-1) !== "."){ //ちゃんとした数値になるものがstrに入ってる場合
          //prev_strとstrに数値と認識されるものが入っている
          value = parseFloat(str);
          //先に入っているoperatorの値により関数を呼び出して、prev_valueとvalueを計算して
          //その結果をprev_strとprev_valueに代入する
          caluculateValue();
          operator = "+";
          operator_str = "+";
          str = "";
          value = 0;
          displayCalc();
      }
    }
  });

  $("#minus").click(function(){
    //マイナスの特性。第１項をマイナスの値にできる処理
    if(operator_str === "" && str == "0"){
      str = "-";
      displayCalc();
    }

    if(str !== "-" && str.slice(-1) !== "."){ 
      if(operator === ""){ //第１項目の後ろに付く四則演算の場合
        prev_str = str;
        prev_value = parseFloat(str);
        operator = "-";
        operator_str = "-";
        str = "";
        displayCalc();
      }
    }
    //以下、第２項目の後ろに付く四則演算の場合
    if(operator !== "" && str === ""){ 
      operator = "-";
      operator_str = "-";
      displayCalc();
    }else{ //第2項に数値と認識される文字列が入っている場合
      if(str !== "-" && str.slice(-1) !== "."){ 
          value = parseFloat(str);
          caluculateValue();
          operator = "-";
          operator_str = "-";
          str = "";
          value = 0;
          displayCalc();
      }
    }
  });

  $("#multiple").click(function(){
    if(str !== "-" && str.slice(-1) !== "."){ 
      if(operator === ""){ //第１項目の後ろに付く四則演算の場合
        prev_str = str;
        prev_value = parseFloat(str);
        operator = "*";
        operator_str = "×";
        str = "";
        displayCalc();
      }
    }
    //以下、第２項目の後ろに付く四則演算の場合
    if(operator !== "" && str === ""){ 
      operator = "*";
      operator_str = "×";
      displayCalc();
    }else{ //第2項に数値と認識される文字列が入っている場合
      if(str !== "-" && str.slice(-1) !== "."){ 
          value = parseFloat(str);
          caluculateValue();
          operator = "*";
          operator_str = "×";
          str = "";
          value = 0;
          displayCalc();
      }
    }
  });

  $("#divide").click(function(){
    if(str !== "-" && str.slice(-1) !== "."){ 
      if(operator === ""){ //第１項目の後ろに付く四則演算の場合
        prev_str = str;
        prev_value = parseFloat(str);
        operator = "/";
        operator_str = "÷";
        str = "";
        displayCalc();
      }
    }
    //以下、第２項目の後ろに付く四則演算の場合
    if(operator !== "" && str === ""){ 
      operator = "/";
      operator_str = "÷";
      displayCalc();
    }else{ //第2項に数値と認識される文字列が入っている場合
      if(str !== "-" && str.slice(-1) !== "."){ 
          value = parseFloat(str);
          caluculateValue();
          operator = "/";
          operator_str = "÷";
          str = "";
          value = 0;
          displayCalc();
      }
    }
  });
});