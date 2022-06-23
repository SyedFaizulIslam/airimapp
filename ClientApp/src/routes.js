import AirimDeepLearning from './components/AirimDeepLearning.vue'
import AirimHome from './components/AirimHome.vue'
import AirimNlp from './components/AirimNlp.vue'
const routes = [
    { path: '/', component: AirimHome },
    { path: '/AirimDeepLearning', name:'AirimDeepLearning',component: AirimDeepLearning },
    { path: '/AirimNlp', component: AirimNlp },
    
];

export default routes;