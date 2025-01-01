import { Image } from "@unpic/brisa";

export default function Homepage() {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1617718295766-0f839c2853e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTczfHxyYWluZm9yZXN0JTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
        layout="fullWidth"
        alt=""
        priority
        height={400}
        crossOrigin="anonymous"
        background="auto"
      ></Image>
      <Image
        src="https://cdn.shopify.com/static/sample-images/garnished.jpeg"
        layout="constrained"
        width={800}
        height={600}
        alt="Shopify"
      ></Image>
      <Image
        src="https://bunnyoptimizerdemo.b-cdn.net/bunny7.jpg?width=300"
        width={400}
        height={300}
        layout="fixed"
        alt="Bunny.net"
      ></Image>
    </>
  );
}