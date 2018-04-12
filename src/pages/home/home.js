import { Component, Vue } from 'vue-property-decorator';


@Component({
    // template: '<div>welcome to VUE SSR  V01</div>'
    render(h) {
        return h('div', { title: 'asdsa' }, 'welcome to VUE SSR  V01')
    }
})
export class Home extends Vue {

}