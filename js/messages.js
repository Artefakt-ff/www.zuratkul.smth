Vue.component('message', {
    props: ['text', 'sender'],
    template: '<div class="message">' +
        '<div class="from" v-bind:class="sender"> {{text}} </div>' +
        '<div class="clear"></div>' +
        '</div>',
});

new Vue({
    el: "#main",
    data: {
        messages: [
            {id: 1, sender: 'them', text: 'Го на Зюраткуль?'},
            {id: 2, sender: 'me', text: 'Не, ну а хуль?'},
        ]
    }
});

