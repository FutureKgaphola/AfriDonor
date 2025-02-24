const status = [
    {
        id:1,
        name:'John Doe',
        status:'online',
        img:require('../assets/sponsors/un.jpg')
    },
    {   
        id:2,
        name:'Jane Doe',
        status:'offline',
        img:require('../assets/sponsors/nestle.webp')
    },
    {
        id:3,
        name:'John Doe',
        status:'online',
        img:require('../assets/sponsors/Shoprite.png')
    },
    {
        id:4,
        name:'Jane Doe',
        status:'offline',
        img:require('../assets/sponsors/spar.jpg')
    },
    {
        id:5,
        name:'John Doe',
        status:'online',
        img:require('../assets/sponsors/zztwo.png')
    },
    {
        id:6,
        name:'John Doe',
        status:'online',
        img:require('../assets/sponsors/Goseame.jpg')
    },

];
type DatawithColors = {
    id: number;
    color: string;
    bg: any;
    msg:string;
    title:string;
};
const defaultDataWith6Colors:DatawithColors[] = [
	{
        id: 1,
        color: "#FFC107",
        bg:require('../assets/images/pasta.jpg'),
		msg:"fancy some pasta today? we have a wide range of pasta dishes to choose from.",
		title:"Proper Meal",
    },
    {
        id: 2,
        color: "#FFC107",
        bg:require('../assets/images/veg.jpg'),
		msg:"fancy some veggies today? we have a wide range of veggie dishes to choose from.",
		title:"Vegetables",
    },
    {
        id: 3,
        color: "#FFC107",
        bg:require('../assets/images/eggnet.jpg'),
		msg:"fancy some fast food today? we have a wide range of fast food dishes to choose from.",
		title:"Quick Meal",
    }
];
const Lorems=`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
 unknown printer took a galley of type and scrambled it to make a type specimen book. 
 It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged`;
type Uploads={
    key:string,
    url:any
}
type sampleStructure={
    id:string,
    profileImage:any,
    name:string,
    subtitle:string,
    message:string,
    pictures?:Uploads[],
    reactions:number,
    day:string
}

const samplePost:sampleStructure[]=[
    {id:'1',profileImage:require('../assets/sponsors/zztwo.png'),
        name:'ZZ2',subtitle:'South African farming enterprise and fresh produce company.'
        ,message:Lorems,pictures:[{key:'1',url:require('../assets/images/eggnet.jpg')},
            {key:'2',url:require('../assets/images/veg.jpg')}
        ],
        reactions:60,day:'2d.'
    },
    {id:'2',profileImage:require('../assets/sponsors/spar.jpg'),
        name:'Spar',subtitle:'Good For You.'
        ,message:Lorems,pictures:[{key:'1',url:require('../assets/images/pasta.jpg')},
            {key:'2',url:require('../assets/images/hum.jpg')}
        ],
        reactions:6,day:'4d.'
    }
]
export {status,Lorems,defaultDataWith6Colors,samplePost,sampleStructure};