import Home from "./pages/Home"


export default function App(){
  let products=[
    {
      title:'Prod 1',
      description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit',
      image:'/burger.png',
      price:230
    },
    {
      title:'Prod 2',
      description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit',
      image:'/burger.png',
      price:240
    },
    {
      title:'Prod 3',
      description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit',
      image:'/burger.png',
      price:250
    },
    {
      title:'Prod 4',
      description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit',
      image:'/burger.png',
      price:260
    },
    {
      title:'Prod 5',
      description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit',
      image:'/burger.png',
      price:270
    },
  ]
  return <div>
    <Home products={products}/>
  </div> 
 
}



