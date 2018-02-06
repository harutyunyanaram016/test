var downHere = document.getElementById('downHere');
var silka = "<a href='#'>ссылке</a>";
var linkProductForButton = "#";
var date = new Date();
var day = date.getDate();
var removeDay = date.getDate()-6;
var key = Number(day)
var today=new Date();
var lastWeekDate = new Date(today.setDate(today.getDate() - 3));
var date1 = lastWeekDate;

if(!localStorage['post_date12']){
    localStorage['post_date12'] = (date1.getDate())+"/"+(date1.getMonth()+1)+"/"+date1.getFullYear();
}

if(!localStorage['comm_date12']){
    localStorage['comm_date12'] = (date.getHours() - 2)+ ":"+date.getMinutes();
}
if(!localStorage['comm_date22']){
    localStorage['comm_date22'] = (date.getHours() - 1)+ ":"+date.getMinutes();
}
$(".block-data").html(localStorage['post_date12']);
$("#comm-date1").html(localStorage['comm_date12']);
$("#comm-date2").html(localStorage['comm_date22']);
if(localStorage['a1']){
    var a = localStorage['a1'];
}else{
    a = 0;
}
var chatbox = 0;
var status = 0;
if(localStorage['status2']){
    status = localStorage['status2'];
}else{
    localStorage['status2'] = 0;
}


for (var i = key; i > key - 5; i--) {
    if (localStorage['chat2_' + i]) {
        document.getElementById('an').insertAdjacentHTML('afterend', localStorage['chat2_' + i])
    }else{
        localStorage['chat2_' + i]
    }
}
var limit = (localStorage['limit21'] > 0) ? localStorage['limit21'] : 0;


for (var i = 0; i <= localStorage['limit21']; i++) {
    $("#downHere").addClass("hidden");
    $(".add-comm").removeClass('hidden');
    downHere.insertAdjacentHTML('beforeBegin',localStorage['key21' + i])
}

if(status == 1){
    document.getElementById('stat').style = 'color:red'
    document.getElementById('stat').innerText = 'Offline'
}

var mode = "";
if(localStorage['mode1']){
    mode = localStorage['mode1'];
}
var alreadyOpened = false;
(function ($) {
    $("#chat-content-box1").click(function () {
        console.log(1000000000000000000000);
        $(".chat-content").css("display", "none");
        $("body").css("overflow", "auto");
    })
    $(document).ready(function () {
        $(".chat-icon").click(function () {
            iconRefrash(true);
            if(a == 0){
                $('.admin_writing').removeClass('hidden');
            }

            console.log(alreadyOpened);
            console.log(a);
            if(mode == ''){
                mode = "CHAT";
                localStorage['mode1'] = 'CHAT';
            }

            try {
                $(".chat-content").css("display", "block")
                $('.chat-content').toggle("slide", {direction: "right"}, 5000)
                $("body").css("overflow", "hidden")
                chatbox = 1;

            } catch (e) {

            } finally {
                var win = document.getElementById('win'),
                    time = new Date(),
                    now = "" + time.getHours() + ":"
                        + time.getMinutes()
                console.log(a);
                if (!alreadyOpened) {
                    alreadyOpened = true;
                    if (a == 0) {
                        localStorage['a1'] = 1
                        setTimeout(function () {
                            iconRefrash(false)
                            var gtml = `<div class="chat__comment bot"><div class="content">Здравствуйте!<br>Вы хотите что-то спросить о товаре?<br>Чем могу помочь?</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                            win.insertAdjacentHTML('beforeEnd', gtml)
                            $('.admin_writing').addClass('hidden');
                            var date = new Date();
                            var day = date.getDate();
                            localStorage["chat2_" + day] = gtml
                        }, 6000)
                        a++
                    }
                }
            }

        });

        $("#popchat").on('keyup', function (e) {
            iconRefrash(true);

            var code = e.which;

            if (event.which == 13) {
                console.log(a);
                console.log(mode);
                var gtml;
                var text = document.getElementById('popchat').value;
                document.getElementById('popchat').value = ""
                if (isValid(text)) {
                    if (isGoodMesssag(text)) {
                        var time = new Date(),
                            win = document.getElementById('win'),
                            now = ""
                                + time.getHours() + ":"
                                + time.getMinutes();

                        var gtml = `<div class="chat__comment"><div class="content">${text}</div><div class="message-info"><p>Вы:</p>${now}</div></div>`
                        win.insertAdjacentHTML('beforeEnd', gtml)
                        var date = new Date();
                        var day = date.getDate();
                        localStorage["chat2_" + day] += gtml
                        if(status != 1){
                            $('.admin_writing').removeClass('hidden');
                        }
                        if (a == 1) {
                            localStorage['a1'] = 2;
                            $('.admin_writing').removeClass('hidden');
                            if (mode == "COMMENT") {
                                console.log(100312312)
                                setTimeout(function () {

                                    iconRefrash(false);
                                    var gtml = `<div class="chat__comment bot"><div class="content">Здесь официальный сайт товара, подробно консультируют только по телефону<br>Всего доброго!</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                                    win.insertAdjacentHTML('beforeEnd', gtml);
                                    $('.admin_writing').addClass('hidden');
                                    var date = new Date();
                                    var day = date.getDate();
                                    localStorage["chat2_" + day] += gtml
                                }, 4000)
                            } else if (mode == "WAITING") {
                                console.log(34)
                                setTimeout(function () {
                                    iconRefrash(false);
                                    var gtml = `<div class="chat__comment bot"><div class="content">Перейдите по этой ${silka} и заполните форму заказа, вам позвонят и ответят по телефону. Решать заказывать товар или нет, лучше после общения голосом.Вы в любой момент можете согласиться или отказаться от покупки.</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                                    win.insertAdjacentHTML('beforeEnd', gtml)
                                    $('.admin_writing').addClass('hidden');
                                    var date = new Date();
                                    var day = date.getDate();
                                    localStorage["chat2_" + day] += gtml
                                }, 8000)

                            } else if (mode == "CHAT") {
                                console.log(100)
                                console.log("dasdasda")
                                setTimeout(function () {
                                    iconRefrash(false);
                                    $('.admin_writing').addClass('hidden');
                                    var gtml = `<div class="chat__comment bot"><div class="content">Товар поможет решить вашу проблему<br>Перейдите по этой ${silka} и заполните форму заказа, вам позвонят и ответят по телефону. Решать заказывать товар или нет, лучше после общения голосом.Вы в любой момент можете согласиться или отказаться от покупки.</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                                    win.insertAdjacentHTML('beforeEnd', gtml)
                                    var date = new Date();
                                    var day = date.getDate();
                                    localStorage["chat2_" + day] += gtml
                                }, 3000)


                            }
                        }
                        if (mode != "COMMENT" && a == 2) {
                            localStorage['a1'] = 3;
                            console.log("sss2")
                            setTimeout(function () {
                                var gtml = `<div class="chat__comment bot"><div class="content">Здесь официальный сайт товара, подробно консультируют только по телефону<br>Всего доброго!</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                                win.insertAdjacentHTML('beforeEnd', gtml)
                                $('.admin_writing').addClass('hidden');
                                var date = new Date();
                                iconRefrash(false);
                                var day = date.getDate();
                                localStorage["chat2_" + day] += gtml
                            }, 8000)
                        }
                        if (mode == "COMMENT" && a == 2) {
                            localStorage['a1'] = 3;
                            console.log("all")
                            setTimeout(function () {
                                var gtml = `<div class="chat__comment bot"><div class="content">Извините, я должен отлучиться. Ответы на все свои вопросы вы можете получить по ссылкам выше.<br> До свидания.</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                                win.insertAdjacentHTML('beforeEnd', gtml)
                                $('.admin_writing').addClass('hidden');
                                document.getElementById('stat').style = 'color:red'
                                document.getElementById('stat').innerText = 'Offline'
                                var date = new Date();
                                localStorage['status2'] = 1;
                                status = 1;
                                var day = date.getDate();
                                localStorage["chat2_" + day] += gtml;
                                iconRefrash(false);
                            }, 5000)
                        }
                        if (mode != "COMMENT" && a == 3) {
                            localStorage['a1'] = 4;
                            console.log("mmm")
                            setTimeout(function () {
                                iconRefrash(false)
                                var gtml = `<div class="chat__comment bot"><div class="content">Извините, я должен отлучиться. Ответы на все свои вопросы вы можете получить по ссылкам выше.<br> До свидания.</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                                win.insertAdjacentHTML('beforeEnd', gtml)
                                $('.admin_writing').addClass('hidden');
                                document.getElementById('stat').style = 'color:red'
                                document.getElementById('stat').innerText = 'Offline'
                                var date = new Date();
                                localStorage['status2'] = 1;
                                status = 1;
                                var day = date.getDate();
                                localStorage["chat2_" + day] += gtml
                            }, 4000)
                        }a++
                    } else {
                        setTimeout(function () {
                            iconRefrash(false)
                            var gtml = `<div class="chat__comment bot"><div class="content">Верить или нет – ваше право.<br>Желаю удачи!</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                            win.insertAdjacentHTML('beforeEnd', gtml)
                            $('.admin_writing').addClass('hidden');
                            var date = new Date();
                            var day = date.getDate();
                            localStorage["chat2_" + day] += gtml
                        }, 4000)
                    }
                }

            }

        });

        $(".window-close").click(function () {
            console.log(21312)
            $(".chat-content").css("display", "none");
            $("body").css("overflow", "auto");
            chatbox = 0;
        });

    });

})(jQuery);

document.getElementById('plane').addEventListener('click', function () {
    console.log(a);
    console.log(mode);
    var gtml;
    var text = document.getElementById('popchat').value;
    document.getElementById('popchat').value = ""
    if (isValid(text)) {
        if (isGoodMesssag(text)) {
            var time = new Date(),
                win = document.getElementById('win'),
                now = ""
                    + time.getHours() + ":"
                    + time.getMinutes();

            var gtml = `<div class="chat__comment"><div class="content">${text}</div><div class="message-info"><p>Вы:</p>${now}</div></div>`
            win.insertAdjacentHTML('beforeEnd', gtml)
            var date = new Date();
            var day = date.getDate();
            localStorage["chat2_" + day] += gtml
            if(status != 1){
                $('.admin_writing').removeClass('hidden');
            }
            if (a == 1) {
                localStorage['a1'] = 2;
                $('.admin_writing').removeClass('hidden');
                if (mode == "COMMENT") {
                    console.log(100312312)
                    setTimeout(function () {
                        iconRefrash(false);
                        var gtml = `<div class="chat__comment bot"><div class="content">Здесь официальный сайт товара, подробно консультируют только по телефону<br>Всего доброго!</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                        win.insertAdjacentHTML('beforeEnd', gtml);
                        $('.admin_writing').addClass('hidden');
                        var date = new Date();
                        var day = date.getDate();
                        localStorage["chat2_" + day] += gtml
                    }, 4000)
                } else if (mode == "WAITING") {
                    console.log(34)
                    setTimeout(function () {
                        iconRefrash(false)
                        var gtml = `<div class="chat__comment bot"><div class="content">Перейдите по этой ${silka} и заполните форму заказа, вам позвонят и ответят по телефону. Решать заказывать товар или нет, лучше после общения голосом.Вы в любой момент можете согласиться или отказаться от покупки.</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                        win.insertAdjacentHTML('beforeEnd', gtml)
                        $('.admin_writing').addClass('hidden');
                        var date = new Date();
                        var day = date.getDate();
                        localStorage["chat2_" + day] += gtml
                    }, 8000)

                } else if (mode == "CHAT") {
                    console.log(100)
                    console.log("dasdasda")
                    setTimeout(function () {
                        iconRefrash(false)
                        $('.admin_writing').addClass('hidden');
                        var gtml = `<div class="chat__comment bot"><div class="content">Товар поможет решить вашу проблему<br>Перейдите по этой ${silka} и заполните форму заказа, вам позвонят и ответят по телефону. Решать заказывать товар или нет, лучше после общения голосом.Вы в любой момент можете согласиться или отказаться от покупки.</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                        win.insertAdjacentHTML('beforeEnd', gtml)
                        var date = new Date();
                        var day = date.getDate();
                        localStorage["chat2_" + day] += gtml
                    }, 3000)


                }
            }
            if (mode != "COMMENT" && a == 2) {
                localStorage['a1'] = 3;
                console.log("sss2")
                setTimeout(function () {
                    iconRefrash(false)
                    var gtml = `<div class="chat__comment bot"><div class="content">Здесь официальный сайт товара, подробно консультируют только по телефону<br>Всего доброго!</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                    win.insertAdjacentHTML('beforeEnd', gtml)
                    $('.admin_writing').addClass('hidden');
                    var date = new Date();
                    var day = date.getDate();
                    localStorage["chat2_" + day] += gtml
                }, 8000)
            }
            if (mode == "COMMENT" && a == 2) {
                localStorage['a1'] = 3;
                console.log("all")
                setTimeout(function () {
                    iconRefrash(false)
                    var gtml = `<div class="chat__comment bot"><div class="content">Извините, я должен отлучиться. Ответы на все свои вопросы вы можете получить по ссылкам выше.<br> До свидания.</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                    win.insertAdjacentHTML('beforeEnd', gtml)
                    $('.admin_writing').addClass('hidden');
                    document.getElementById('stat').style = 'color:red'
                    document.getElementById('stat').innerText = 'Offline'
                    var date = new Date();
                    localStorage['status2'] = 1;
                    status = 1
                    var day = date.getDate();
                    localStorage["chat2_" + day] += gtml
                }, 5000)
            }
            if (mode != "COMMENT" && a == 3) {
                localStorage['a'] = 4;
                console.log("mmm")
                setTimeout(function () {
                    iconRefrash(false)
                    var gtml = `<div class="chat__comment bot"><div class="content">Извините, я должен отлучиться. Ответы на все свои вопросы вы можете получить по ссылкам выше.<br> До свидания.</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                    win.insertAdjacentHTML('beforeEnd', gtml)
                    $('.admin_writing').addClass('hidden');
                    document.getElementById('stat').style = 'color:red'
                    document.getElementById('stat').innerText = 'Offline'
                    var date = new Date();
                    localStorage['status2'] = 1;
                    status = 1;
                    var day = date.getDate();
                    localStorage["chat2_" + day] += gtml
                }, 4000)
            }a++
        } else {
            setTimeout(function () {
                iconRefrash(false)
                var gtml = `<div class="chat__comment bot"><div class="content">Верить или нет – ваше право.<br>Желаю удачи!</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                win.insertAdjacentHTML('beforeEnd', gtml)
                $('.admin_writing').addClass('hidden');
                var date = new Date();
                var day = date.getDate();
                localStorage["chat2_" + day] += gtml
            }, 4000)
        }
    }
})


document.getElementById('comm').addEventListener('click', function () {

    var name = document.getElementById('comment-name').value,
        text = document.getElementById('comment-text').value;


    if (isValid(text)) {
        var time = new Date(),
            prev = document.getElementsByClassName('use'),
            now =
                + time.getHours() + ":"
                + time.getMinutes();

        $("#downHere").hide()
        setTimeout(function () {

            try {
                iconRefrash(true);
                $(".chat-content").css("display", "block")
                $('.chat-content').toggle("slide", {direction: "right"}, 5000)
                $("body").css("overflow", "hidden")
                chatbox = 1;

            } catch (e) {

            } finally {
                if (!alreadyOpened) {
                    alreadyOpened = true;
                    if (a == 0) {
                        mode = "COMMENT"
                        localStorage['mode1'] = 'COMMENT';
                        $('.admin_writing').removeClass('hidden');
                        a++
                        localStorage['a1'] = 1;
                        var win = document.getElementById('win')
                        setTimeout(function () {
                            $('.admin_writing').add('hidden');
                            var gtml = `<div class="chat__comment bot"><div class="content">Здравствуйтe ${name}<br>Я увидел ваше сообщение в комментарии.Перейдите по этой ${silka} и заполните форму заказа, вам позвонят и ответят по телефону. Решать заказывать товар или нет, лучше после общения голосом.Вы в любой момент можете согласиться или отказаться от покупки.</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                            win.insertAdjacentHTML('beforeEnd', gtml)
                            $('.admin_writing').addClass('hidden');
                            var date = new Date();
                            var day = date.getDate();
                            iconRefrash(false)
                            localStorage["chat2_" + day] = gtml

                        }, 10000)
                    }
                }
            }

        }, 7000)

        document.getElementById('comment-text').value = ''
        if (text.length < 2 || name.length < 2)
            return
        for (var i = 0; i < prev.length; i++)
            if (prev[i].innerText == text)
                return


        var html = `<div class="comment-item"><div class="comment-user-img"><img src="img/comment_photo_1.png" alt="" /></div><div class="comment-user-name"><p>${name}</p><p><span>${text}.</span></p></div><div class="comment-text"><p>0 минуты назад</p></div></div>`;
        $("#downHere").addClass('hidden');
        $('.add-comm').removeClass('hidden');
        downHere.insertAdjacentHTML('beforeBegin',html);
        localStorage['limit21'] = limit;
        localStorage['key21' + limit] = html;
        limit++


    }
})


setTimeout(function () {


    iconRefrash(true)
    try {
        $(".chat-content").css("display", "block")
        $('.chat-content').toggle("slide", {direction: "right"}, 5000)
        $("body").css("overflow", "hidden")

    } catch (e) {

    } finally {
        if (a == 0) {
            $('.admin_writing').removeClass('hidden');
            alreadyOpened = true
            if (a == 0) {
                var mode = "WAITING"
                localStorage['mode1'] = 'WAITING';
                localStorage['a1'] = 1;
                var win = document.getElementById('win'),
                    time = new Date(),
                    now = "" + time.getHours() + ":"
                        + time.getMinutes();

                setTimeout(function () {
                    var gtml = `<div class="chat__comment bot"><div class="content">Здравствуйтe!<br>Вы находитесь на моем сайте уже достаточно долго. У вас есть вопросы о товаре?</div><div class="message-info"><p>Алина:</p>${now}</div></div><br>`
                    win.insertAdjacentHTML('beforeEnd', gtml)
                    $('.admin_writing').addClass('hidden');
                    var date = new Date();
                    var day = date.getDate();
                    a++
                    localStorage["chat2_" + day] = gtml
                }, 4000)
            }
        }
    }
}, 120000)
if(a == 0){
    setTimeout(function () {
        if (!alreadyOpened) {
            iconRefrash(false)
        }
    }, 30000)
}
var interval
function iconRefrash(type) {

    if (!type) {
        $('.one-message').removeClass('hidden')
        var open = true;
        interval = setInterval(function () {
            if (open) {
                $('.chat-icon img').css({height: '65px', width: '65px'})
                open = false;
            } else {
                $('.chat-icon img').css({height: '70px', width: '70px'})
                open = true;
            }
        }, 300)
    } else {
        $('.one-message').addClass('hidden')
        $('.chat-icon img').css({height: '70px', width: '70px'})
        clearInterval(interval);
    }
}

function isValid(text) {
    return text !== "";
}

function isGoodMesssag(text) {
    return true;
}
$(".custom-button,.zakaz").on("click", function functionName() {
    location.href = linkProductForButton;
});