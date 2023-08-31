import {createStore} from "vuex";
import {commentsModule} from "@/store/commentsModule";

export default createStore({
    state: {
        images: [
            {id: 1, title: "Image1", image: "https://sun9-23.userapi.com/impg/8d4WmKQCG0zXElk99w-psjjzePs_INPXD5u-Mw/rhU0DSTc4ns.jpg?size=639x605&quality=96&sign=45f77458788c1026d66992437483b350&type=album"},
            {id: 2, title: "Image2", image: "https://sun9-23.userapi.com/impg/8d4WmKQCG0zXElk99w-psjjzePs_INPXD5u-Mw/rhU0DSTc4ns.jpg?size=639x605&quality=96&sign=45f77458788c1026d66992437483b350&type=album"},
            {id: 3, title: "Image3", image: "https://sun9-23.userapi.com/impg/8d4WmKQCG0zXElk99w-psjjzePs_INPXD5u-Mw/rhU0DSTc4ns.jpg?size=639x605&quality=96&sign=45f77458788c1026d66992437483b350&type=album"},
            {id: 4, title: "Image4", image: "https://sun9-23.userapi.com/impg/8d4WmKQCG0zXElk99w-psjjzePs_INPXD5u-Mw/rhU0DSTc4ns.jpg?size=639x605&quality=96&sign=45f77458788c1026d66992437483b350&type=album"}
            ]
    },
    modules: {
        comments: commentsModule
    }
})