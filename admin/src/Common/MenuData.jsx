import { faBook, faPeopleGroup, faSliders, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const data = [
   
    {
        id:1,
        icon:<FontAwesomeIcon icon={faBook}/>,
        uid:"Categories",
        sub1:"Add Category",
        sub2:"View Category",
        link1:'/addCategory',
        link2:'/viewCategory',
    },
    {
        id:2,
        icon:<FontAwesomeIcon icon={faBook}/>,
        uid:"SubCategories",
        sub1:"Add Sub Category",
        sub2:"View sub Category",
        link1:'/addSubCategory',
        link2:'/viewCategory',
    },
    {
        id:3,
        icon:<FontAwesomeIcon icon={faBook}/>,
        uid:"Products",
        sub1:"Add products",
        sub2:"View Products",
        link1:'/addProduct',
        link2:'/viewProduct',
    },
    {
        id:4,
        icon:<FontAwesomeIcon icon={faUsers}/>,
        uid:"User",
        sub1:"View User",
        sub2:"",
        link1:'/viewuser',
    },
]