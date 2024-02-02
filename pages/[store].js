import React from 'react'
import { useRouter } from 'next/router';

export default function store() {
    const router = useRouter();
    const { store } = router.query;
    console.log(store, "<----slug")
  return (
    <div>{`the store name is ${store}`}</div>
  )
}

<<<<<<< HEAD
// Fetch dynamic content based on the slug
export async function getServerSideProps({ params }) {
  const { slug } = params;

  // Fetch content based on the slug from your data source
  const content = await fetchContentBySlug(slug);

  return {
    props: {
      content,
    },
  };
}
=======
>>>>>>> 1901fc3330c73e458f2b09a46d93a953dbf7aec0
