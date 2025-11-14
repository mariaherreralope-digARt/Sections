import Image from "next/image";
export default function OverlapPopularPosts() {
  return (
    <section className="relative bg-lighter flex flex-col items-center py-20">
    <div className="relative bg-dark flex flex-col items-center justify-center px-16 py-12 max-w-4xl">
      <h2 className="heading  text-lighter mb-6">Popular Posts</h2>
<div className="relative grid md:grid-cols-2 gap-10 py-4">
  <div className="relative flex items-center justify-center">
    <Image
      src="/images/collage7.png"
      alt="Popular Post 1"
      width={300} 
      height={150}

  />
    <div className="absolute bg-lighter py-4 px-6 flex flex-col items-center self-end -mb-8">
      <h3 className="title-italic-boxed mb-4 text-darker">Exploring the Mountains</h3>
      <button className=" btn-squared ">Learn More</button>
    </div>
  </div>
   <div className="relative flex items-center justify-center">
    <Image
      src="/images/collage8.png"
      alt="Popular Post 1"
      width={300} 
      height={150}

  />
    <div className="absolute bg-lighter py-4 px-6 flex flex-col items-center self-end -mb-8">
      <h3 className="title-italic-boxed mb-4 text-darker">Exploring the Mountains</h3>
      <button className=" btn-squared ">Learn More</button>
    </div>
  </div>
</div>
    </div>
    </section>
  )
}