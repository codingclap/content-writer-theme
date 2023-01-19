function estimate() {
    var service = document.getElementById("service");
    var selectedService = service.options[service.selectedIndex].value;
    var words = document.getElementById("words").value;
    var form1 = document.getElementById("form1");
    var qty = document.getElementById("qty").value;
    var cost = 0;
    console.log(selectedService);

    if (selectedService == 1 || selectedService == 10) {
        cost = 0.5 * words;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }
    else if (selectedService == 2 || selectedService == 4) {
        cost = 1 * words;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }
    else if (selectedService == 3 || selectedService == 5 || selectedService == 6 || selectedService == 7) {
        cost = 2 * words;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }

    else if (selectedService == 4) {
        cost = 1 * words;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }
    else if (selectedService == 8 || selectedService == 9) {
        cost = 3 * words;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }
    else if (selectedService == 7 || selectedService == 30 || selectedService == 31) {
        cost = 0.080 * words;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }

    else if (selectedService == 12) {
        cost = 0.040 * words;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }

    else if (selectedService == 16) {
        cost = 30 * qty;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }

    else if (selectedService == 17) {
        cost = 20 * qty;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }

    else if (selectedService == 18) {
        cost = 0.160 * words;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }

    else if (selectedService == 19 || selectedService == 20) {
        cost = 40 * qty;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }


    else if (selectedService == 15) {
        cost = 37.5 * qty;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }

    else if (selectedService == 21) {
        cost = 5 * qty;
        cost = parseFloat(cost).toFixed(2);
        document.getElementById("cost").innerHTML = "<span style='font-size:16px;padding-bottom:7.99px;color:#252425;display:block;'>Your Price</span>" + cost + "" + "<span class='inrsym'>INR</span>";
        document.getElementById('form1').style.display = '';
    }

}

function changeStatus() {
    var status = document.getElementById("service").value;
    if (status == "1" || status == "2" || status == "5" || status == "6" || status == "7" || status == "8" || status == "9" || status == "10" || status == "11" || status == "12" || status == "13" || status == "14" || status == "18") {
        document.getElementById("wordss").style.display = '';
        document.getElementById("words").value = "";
        document.getElementById("qty").value = "";
    } else {
        document.getElementById("wordss").style.display = 'none';
        document.getElementById("words").value = "";
        document.getElementById("qty").value = "";
    }
    if (status == "3" || status == "4" || status == "15" || status == "16" || status == "17" || status == "19" || status == "20" || status == "21") {
        document.getElementById("qtyn").style.display = '';
        document.getElementById("words").value = "";
        document.getElementById("qty").value = "";
    } else {
        document.getElementById("qtyn").style.display = 'none';
        document.getElementById("words").value = "";
        document.getElementById("qty").value = "";
    }

    if (document.getElementById('service').value == '1')
        document.getElementById("chooseselect").value = '1';
    else if (document.getElementById('service').value == '2')
        document.getElementById("chooseselect").value = '2';
    else if (document.getElementById('service').value == '3')
        document.getElementById("chooseselect").value = '3';
    else if (document.getElementById('service').value == '4')
        document.getElementById("chooseselect").value = '4';
    else if (document.getElementById('service').value == '5')
        document.getElementById("chooseselect").value = '5';
    else if (document.getElementById('service').value == '6')
        document.getElementById("chooseselect").value = '6';
    else if (document.getElementById('service').value == '7')
        document.getElementById("chooseselect").value = '7';
    else if (document.getElementById('service').value == '8')
        document.getElementById("chooseselect").value = '8';
    else if (document.getElementById('service').value == '9')
        document.getElementById("chooseselect").value = '9';
    else if (document.getElementById('service').value == '10')
        document.getElementById("chooseselect").value = '10';
    else if (document.getElementById('service').value == '11')
        document.getElementById("chooseselect").value = '11';
    else if (document.getElementById('service').value == '12')
        document.getElementById("chooseselect").value = '12';
    else if (document.getElementById('service').value == '13')
        document.getElementById("chooseselect").value = '13';
    else if (document.getElementById('service').value == '14')
        document.getElementById("chooseselect").value = '14';
    else if (document.getElementById('service').value == '15')
        document.getElementById("chooseselect").value = '15';
    else if (document.getElementById('service').value == '16')
        document.getElementById("chooseselect").value = '16';
    else if (document.getElementById('service').value == '17')
        document.getElementById("chooseselect").value = '17';
    else if (document.getElementById('service').value == '18')
        document.getElementById("chooseselect").value = '18';
    else if (document.getElementById('service').value == '19')
        document.getElementById("chooseselect").value = '19';
    else if (document.getElementById('service').value == '20')
        document.getElementById("chooseselect").value = '20';
    else if (document.getElementById('service').value == '21')
        document.getElementById("chooseselect").value = '21';
}


function validateandsend() {
    var service = document.getElementById("service");
    var zone = document.getElementById("zone");
    var selectedZone = zone.options[zone.selectedIndex].value;
    var selectedService = service.options[service.selectedIndex].value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var mytime = document.getElementById("mytime").value;
    var data = {
        name: name,
        email: email,
        phone: phone,
        mytime: mytime,
        zone: selectedZone,
        service: selectedService
    };
    $.ajax({
        url: 'https://content-whale.com/submit1.php',
        type: 'POST',
        dataType: 'json',
        data: data,
        cache: false,
        success: function () {

            window.location.href = 'https://content-whale.com/thankyou';
        },
        error: function (error) {
            alert("Error");
        }
    });

    return false;

}


function mvalidate() {
    var data = {
        contact_name: $('#contact_name').val(),
        contact_email: $('#contact_email').val(),
        contact_phone: $('#contact_phone').val(),
        message: $('#message').val(),
    };

    $.ajax({
        url: "https://content-whale.com/php/submit.php",
        type: 'POST',
        dataType: 'json',
        data: data,
        cache: false,
        success: function (data) {
            window.location = "https://content-whale.com/thankyou.php";
        },
        error: function (jqXHR, textStatus, ex) {
            console.log(data);
            messagebox.html('Error communicating with server');
        }
    });
    return false;
}


