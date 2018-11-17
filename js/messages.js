$(function () {  // catch enter press
    $('body').keypress(function (event) {
        var key = event.keycode || event.which;
        if (key === 13) {
            $('#main_send').click();
        }

    });
});

Vue.component('message', {
    props: ['text', 'sender', 'author'],
    template: '<div class="message">' +
        '<div class="from" v-bind:class="sender"><span v-if="author" class="author">{{author}}<br></span>{{text}} </div>' +
        '<div class="clear"></div>' +
        '</div>',
});

new Vue({
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
            if (this.text !== undefined) {
                if (this.messages.length >= 8) {
                    this.messages.shift()
                }
                this.currentID++;
                this.messages.push({id: this.currentID, sender: 'me', text: this.text, author: false});
                this.text = undefined;

            }
        }
    }
});

