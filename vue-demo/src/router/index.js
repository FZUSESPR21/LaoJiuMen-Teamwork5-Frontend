import Vue from 'vue'
import Router from 'vue-router'


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const Home = () =>
    import ('../components/student/home')
const Source = () =>
    import ('../components/student/source/sourcelist')
const Activity = () =>
    import ('../components/student/activity/activitymain')
const Signin = () =>
    import ('../components/student/signin/signinmain')
const Result = () =>
    import ('../components/student/result/resultshow')
const Comment = () =>
    import ('../components/student/comment/commentlist')
const SetPassword = () =>
    import ('../components/Login/SetPassword')
const Login = () =>
    import ('../components/Login/Login')
const Student = () =>
    import ('../components/student/student')
const LoginBox = () =>
    import ('../components/Login/LoginBox')

const TeacherHome = () =>
    import ('../components/teacher/home')
const TeacherSource = () =>
    import ('../components/teacher/source/sourcelist')
const TeacherActivity = () =>
    import ('../components/teacher/activity/activitymain')
const TeacherSignin = () =>
    import ('../components/teacher/signin/signinlist')
const TeacherResult = () =>
    import ('../components/teacher/result/resultlist')
const TeacherComment = () =>
    import ('../components/teacher/comment/commentlist')
const TeacherSetPassword = () =>
    import ('../components/Login/SetPassword')
const TeacherLogin = () =>
    import ('../components/Login/Login')
const Teacher = () =>
    import ('../components/teacher/teacher')
const TeacherLoginBox = () =>
    import ('../components/Login/LoginBox')
const TeacherManage = () =>
    import ('../components/teacher/manage/studentlist')

//1.安装插件
Vue.use(Router)


const routes = [{
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
        children: [{
                path: '',
                redirect: 'login'
            },
            {
                path: 'login',
                component: LoginBox
            },
            {
                path: 'setPassword',
                component: SetPassword
            }
        ]
    },
    {
        path: '/student',
        component: Student,
        children: [{
                path: '',
                redirect: 'home'
            },
            {
                path: 'source',
                component: Source
            },
            {
                path: 'home',
                component: Home
            },
            {
                path: 'activity',
                component: Activity
            },
            {
                path: 'signin',
                component: Signin
            },
            {
                path: 'result',
                component: Result
            },
            {
                path: 'comment',
                component: Comment
            }
        ]
    },
    {
        path: '/teacher',
        component: Teacher,
        children: [{
                path: '',
                redirect: 'home'
            },
            {
                path: 'source',
                component: TeacherSource
            },
            {
                path: 'home',
                component: TeacherHome
            },
            {
                path: 'activity',
                component: TeacherActivity
            },
            {
                path: 'signin',
                component: TeacherSignin
            },
            {
                path: 'result',
                component: TeacherResult
            },
            {
                path: 'comment',
                component: TeacherComment
            },
            {
                path: 'manage',
                component: TeacherManage
            }
        ]
    },

]

//2.创建Router对象,export default导出
export default new Router({
    //配置路由和组件之间的关系，
    routes,
    mode: "history"
})


//3.在vue里挂载