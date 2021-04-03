Vue.component('todo-item', {
    template: '\<div v-if="singleTeam" >\
    <li v-for="team in singleTeam.players" > {{team.full_name}}</li>\</div>\<div v-else class="loading">Loading...</div>\
  ',
    props: ['title'],
    data: function () {
        return {
            singleTeam: [],
            loading: true
        }
    },
    mounted() {
        var optionAxios = {
            config: {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }
        }
        axios
            .get('http://5aside.league.2dev.uk/api/v1/teams/'+this.title,optionAxios )
            .then(response => (this.singleTeam = response.data))
            .finally(() => this.loading = false)
    }
})

new Vue({
    el: '#todo-list-example',
})


// Vue.component('todo-item', {
//     template: '\
//     <li>\
//       {{ title }}\
//       <button v-on:click="$emit(\'remove\')">Remove</button>\
//     </li>\
//   ',
//     props: ['title']
// })
//
// new Vue({
//     el: '#todo-list-example',
//     data: {
//         todos: [],
//     },
//     mounted ()
//     {
//         var optionAxios = {
//             config: {
//                 headers: {
//                     'Access-Control-Allow-Origin': '*',
//                 }
//             }
//         }
//         axios
//             .get('http://5aside.league.2dev.uk/api/v1/teams',optionAxios )
//             .then(response => (this.todos = console.log(response.data)))
//             .finally(() => this.loading = false)
//     }
// })