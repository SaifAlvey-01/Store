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
