$(function () {  // catch enter press
    $('body').keypress(function (event) {
        var key = event.keycode || event.which;
        if (key === 13) {
            $('#main_send').click();
        }

    });
});

function isAgreement(answer) {
    let text = answer.toLowerCase(),
        sample_answers = ['го', 'давай', 'go', 'гоу', 'погнали', 'давай', 'да', 'yes', 'согласен', 'согласна', 'хули', 'готов', 'готова'];
    for (let i = 0; i < sample_answers.length; i++) {
        if (text === sample_answers[i]) return true
    }
    return false

}

function sound(path) {
    $('body').append('<audio id="temporary_sound" src="' + path + '" autoplay="autoplay"></audio>');
    setTimeout(function () {
        $('#temporary_sound').remove()
    }, 2000);
}

function makeMessage(sender, text, author) {
    main.currentID++;
    return {id: main.currentID, sender: sender, text: text, author: author}
}

function controlNumberOfMessages() {
    const max_number = 7;
    if (main.messages.length > max_number) {
        main.messages.shift();
    }
}

function sendMessage(sender, text, author) {
    let message = makeMessage(sender, text, author);
    if (sender === 'them' && author !== '...') {
        sound('sounds/message.mp3');
    }
    controlNumberOfMessages();
    main.messages.push(message);
}

Vue.component('message', {
    props: ['text', 'sender', 'author'],
    template: '<div class="message">' +
        '<div class="from" v-bind:class="sender"><span v-if="author" class="author">{{author}}<br></span>{{text}} </div>' +
        '<div class="clear"></div>' +
        '</div>',
});

let main = new Vue({
    el: "#main",
    data: {
        currentID: 2,
        messages: [
            {id: 1, sender: 'them', text: 'Го на Зюраткуль?', author: 'Артем'},
            {id: 2, sender: 'them', text: 'Не, ну а хуль?', author: 'Артем'},
        ]
    },
    methods: {
        sendMessage: function () {
            let temp,
                main_section = $('#main'),
                another_section = $('#another');

            if (this.text !== undefined) {
                sendMessage('me', main.text, false);

                temp = this.text;
                this.text = undefined;

                if (isAgreement(temp)) {
                    setTimeout(function () {
                        sendMessage('them', '', '...');
                        setTimeout(function () {
                            main.messages.pop();
                            sendMessage('them', 'Отлично', 'Артем');
                            setTimeout(function () {
                                sendMessage('them', '', '...');
                                setTimeout(function () {
                                    main.messages.pop();
                                    sendMessage('them', 'Сейчас скину инфу', 'Артем');
                                    setTimeout(function () {
                                        main_section.fadeOut(500);
                                        another_section.css('display', 'block');
                                        setTimeout(function () {
                                            main_section.css('display', 'none');
                                        }, 500);
                                    }, 800);
                                }, 400)
                            }, 300);
                        }, 200);
                    }, 600);

                }
                else {

                    setTimeout(function () {
                        sendMessage('them', '', '...');
                        setTimeout(function () {
                            main.messages.pop();
                            sendMessage('them', 'Надеюсь я тебя неправильно понял', 'Артем');
                        }, 800);
                    }, 500);
                }

            }

        }
    }
});

