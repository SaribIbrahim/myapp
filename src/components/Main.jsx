import Caard from "./Caard";

export default function Main({products}) {
  return <main>
    <div className="row">
      {
        products.map(product=><Caard product={product}/>)
      }
    </div>
  </main>
}